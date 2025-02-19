import localFont from 'next/font/local';

import './globals.css';
import { ClientQueryProvider } from './_api/ClientQueryProvider';

const pretendard = localFont({
  src: '../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <ClientQueryProvider>
          <div className="drop-shadow-brand flex h-dvh justify-center bg-gray-100 md:drop-shadow-none">
            <div className="w-full max-w-[440px]">{children}</div>
          </div>
        </ClientQueryProvider>
      </body>
    </html>
  );
}
