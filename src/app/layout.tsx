import './globals.css';

import { NextUIProvider } from '@nextui-org/system';
import { SessionProvider } from 'next-auth/react';
import { oppo } from './global';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oppo.variable} font-sans`}>
        <SessionProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
