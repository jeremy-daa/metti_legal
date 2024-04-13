import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`/api/admin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const data = await res.json();
        const admin = data.admin;
        const user = { id: admin.id, name: admin.username, email: admin.email };

        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {},
  session: {
    strategy: "jwt",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
