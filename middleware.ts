import { withAuth } from 'next-auth/middleware';

declare module 'next-auth/jwt' {
  interface JWT {
    isAdmin?: boolean;
  }
}

export default withAuth({
  callbacks: {
    async authorized({ req, token }) {
      if (req.nextUrl.pathname === '/dashboard') {
        return token && token.user && token.isAdmin ? true : false;
      }
      return true;
    },
  },
});
