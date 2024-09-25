import './globals.css';

import { NextUIProvider } from '@nextui-org/system';
import { SessionProvider } from 'next-auth/react';
import { oppo } from './global';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oppo.variable} font-sans`}>
        <SessionProvider>
          <NextUIProvider>
          <NextTopLoader color="#b249f8" />
            {children}
            </NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
