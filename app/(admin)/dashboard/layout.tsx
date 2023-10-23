import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Dashboard | PlanetScale + Prisma with NextAuth App',
  description: 'planetscale-mysql-prisma-nextauth-nextjs-app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
