import './globals.css';
import localFont from 'next/font/local';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Toaster } from 'sonner';

import { ClientQueryProvider } from './_api/ClientQueryProvider';

const pretendard = localFont({
  src: '../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  keywords: ['스부키', '마법 도서관 스부키', '독서', '유령', 'Sbooky'],
  twitter: {
    card: 'summary_large_image',
    title: '독서로 만나는 유령, 마법 도서관 스부키',
    description: '책을 읽고 기록하며 포인트를 모으고, 개성 있는 유령 캐릭터를 획득하세요.',
    images: ['https://www.sbooky.net/MAIN.png'],
  },
  openGraph: {
    type: 'website',
    title: '독서로 만나는 유령, 마법 도서관 스부키',
    description: '책을 읽고 기록하며 포인트를 모으고, 개성 있는 유령 캐릭터를 획득하세요.',
    siteName: 'Sbooky',
    url: 'https://www.sbooky.net/',
    images: ['https://www.sbooky.net/MAIN.png'],
  },
  title: 'Sbooky',
  description: '독서로 만나는 유령, 마법 도서관 스부키',
  icons: ['https://www.sbooky.net/favicon.ico'],
  other: {
    'naver-site-verification': '5a2f73ad35bb3d364ce14a4fb40205e2a961dba6',
  },
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
        <Toaster position="top-center" richColors duration={1500} />
      </body>
    </html>
  );
}
