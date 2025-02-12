import localFont from 'next/font/local';
import './globals.css';

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
        <div className="flex h-dvh justify-center">
          <div className="mx-4 w-full max-w-[375px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
