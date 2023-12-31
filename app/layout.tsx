import type { Metadata } from 'next';
import { Zen_Antique } from 'next/font/google';
import ProviderWrap from '@/app/contexts';
import Header from '@/app/components/base/Header';
import Footer from './components/base/Footer';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Zen_Antique({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Home | msk.dev',
  description: 'planetscale-mysql-prisma-nextauth-nextjs-app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ProviderWrap>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </ProviderWrap>
      </body>
    </html>
  );
}
