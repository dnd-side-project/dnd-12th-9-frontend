import './globals.css';
import localFont from 'next/font/local';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

import { ClientQueryProvider } from './_api/ClientQueryProvider';

const pretendard = localFont({
  src: '../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Sbooky',
  description: '독서로 만나는 유령, 마법 도서관 스부키',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <link rel="icon" href="/favicon.ico" />
      <body className={pretendard.className}>
        <ClientQueryProvider>
          <div className="drop-shadow-brand flex h-dvh justify-center bg-gray-100 md:drop-shadow-none">
            <div className="w-full max-w-[440px]">{children}</div>
          </div>
        </ClientQueryProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
