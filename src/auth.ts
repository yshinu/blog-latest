import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: { signIn: "/auth/signin" },
    secret: process.env.AUTH_SECRET,
    session: { strategy: "jwt" },
    providers: [
        
        Credentials({
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          credentials: {
            // username:{},
            email: {},
            password: {},
          },

          authorize: async (credentials) => {
            let user = null
     
            const parsedCredentials = signInSchema.safeParse(credentials);
            if (!parsedCredentials.success) {
                console.error("Invalid credentials:", parsedCredentials.error.errors);
                return null;
            }
            user = {
                id: '1',
                name: 'Aditya Singh',
                email: 'jojo@jojo.com',
                role: "admin"
            }

            if (!user) {
                console.log("Invalid credentials");
                return null;
            }

            return user;
          },
        }),
      ],
})