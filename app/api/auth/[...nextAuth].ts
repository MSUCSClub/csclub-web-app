import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import clientPromise from "@/lib/mongodb";

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: "csclub-app",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: "http://localhost:8080/realms/CSClub",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user }) {
      const client = await clientPromise;
      const db = client.db("CSClub");

      // Check if the user exists in MongoDB
      const existingUser = await db.collection("Members").findOne({ username: user.name });

      // If user does not exist, create a new record in MongoDB
      if (!existingUser) {
        await db.collection("Members").insertOne({
          username: user.name,
          email: user.email,
          auth: "keycloak",
          createdAt: new Date(),
        });
      }

      return true; // Allow the sign-in
    },
    async session({ session, user }) {
      // Include additional user data in the session if needed
      session.user.role = user.role || "member";
      return session;
    },
  },
});