// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      name?: string;
      email?: string;
      image?: string;
      role?: string; // Add custom field 'role'
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string; // Add custom field 'role'
  }

  interface ProcessEnv {
    KEYCLOAK_CLIENT_SECRET: string;
  }
}