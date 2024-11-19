import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import fetch from "node-fetch";
import { hash } from "bcryptjs";

const keycloakUrl = process.env.KEYCLOAK_URL!;
const keycloakRealm = process.env.KEYCLOAK_REALM!;
const keycloakClientId = process.env.KEYCLOAK_CLIENT_ID!;
const keycloakClientSecret = process.env.KEYCLOAK_CLIENT_SECRET!;

// Type for Keycloak token response
type KeycloakTokenResponse = {
  access_token: string;
  error?: string;
  error_description?: string;
};

// Type for Keycloak error response
type KeycloakErrorResponse = {
  errorMessage?: string;
  statusText?: string;
};

async function registerKeycloakUser(email: string, password: string) {
  try {
    // Obtain Keycloak access token using client credentials
    const tokenResponse = await fetch(
      `${keycloakUrl}/realms/${keycloakRealm}/protocol/openid-connect/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: keycloakClientId,
          client_secret: keycloakClientSecret,
        }),
      }
    );

    const tokenData = (await tokenResponse.json()) as KeycloakTokenResponse;


    if (!tokenResponse.ok) {
      console.error("Token Response:", tokenResponse.status, tokenResponse.statusText);
      console.error("Token Data:", tokenData);
      throw new Error(`Failed to get access token: ${tokenData.error_description || tokenData.error}`);
    }

    const accessToken = tokenData.access_token;

    // Create the user in Keycloak
    const userResponse = await fetch(`${keycloakUrl}/admin/realms/${keycloakRealm}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        email,
        enabled: true,
        credentials: [
          {
            type: "password",
            value: password,
            temporary: false,
          },
        ],
      }),
    });

    const errorData = (await userResponse.json()) as KeycloakErrorResponse;

    if (!userResponse.ok) {
      console.error("User Response:", userResponse.status, userResponse.statusText);
      console.error("Error Data:", errorData);
      throw new Error(`Failed to create user in Keycloak: ${errorData.errorMessage || userResponse.statusText}`);
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Keycloak Registration Error:", message);
    return { success: false, error: message };
  }
}

export async function POST(request: Request) {
  try {
    const { password, email, fullName, yearOfStudy, major, profilePic } = await request.json();

    if (!password || !email) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Register user in Keycloak
    const keycloakResult = await registerKeycloakUser(email, password);

    if (!keycloakResult.success) {
      return NextResponse.json({ message: keycloakResult.error }, { status: 500 });
    }

    // Hash the password for MongoDB storage
    const hashedPassword = await hash(password, 10);

    // Save user data in MongoDB
    const client = await clientPromise;
    const db = client.db("CSClub");

    const newUser = {
      password: hashedPassword,
      email,
      fullName: fullName || "",
      yearOfStudy: yearOfStudy || "",
      major: major || "",
      profilePic: profilePic || "",
      userType: "Member",
      createdAt: new Date(),
    };

    await db.collection("Members").insertOne(newUser);

    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Registration Error:", message);
    return NextResponse.json({ message: "Failed to register user: " + message }, { status: 500 });
  }
}