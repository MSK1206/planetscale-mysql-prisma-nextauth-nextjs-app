import NextAuth from 'next-auth';
import { authConfig } from '@/app/api/Auth';

export const authHandler = NextAuth(authConfig);

export { authHandler as GET, authHandler as POST };
