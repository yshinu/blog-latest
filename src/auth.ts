import NextAuth, { AuthError, CredentialsSignin, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from './lib/zod';
import { db } from './db/db';
import { users } from './db/schema';
import { eq } from 'drizzle-orm';
import { LoginFail, NofoundUser } from './lib/customError';
import md5 from 'md5';
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: { signIn: '/auth/signin' },
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        const parsedCredentials = signInSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.error('数据格式验证失败:', parsedCredentials.error.errors);
          return null;
        }
        const { email, password } = parsedCredentials.data;
        const dbUser = await db
          .select()
          .from(users)
          .where(eq(users.email, email))
          .then((res) => res[0]);
        if (!dbUser) {
          throw new NofoundUser();
        }
        if (md5(password) !== dbUser.passwordHash) {
          throw new LoginFail();
        }
        return { ...dbUser, passwordHash: '', id: dbUser.id.toString() };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      const { nextUrl } = request;

      const isLoggedIn = !!auth?.user;
      const isAdminPath = nextUrl.pathname.startsWith('/admin');
      const isLoginPath = nextUrl.pathname === '/auth/signin';
      if (isAdminPath) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL('/auth/signin', nextUrl));
      }
      if (isLoginPath && isLoggedIn)
        return Response.redirect(new URL('/', nextUrl));

      return true;
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }

      if (user?.id) token.id = +user.id;
      if (user?.avatarUrl) token.roavatarUrle = user.avatarUrl;

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id.toString();
        session.user.avatarUrl = token.roavatarUrle;
      }
      return session;
    }
  },
});
