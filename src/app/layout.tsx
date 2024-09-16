import NavBar from '@/components/navBar';
import './globals.css';

import { NextUIProvider } from '@nextui-org/system';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <NextUIProvider>
        <NextTopLoader color='#b249f8' />
         <NavBar />
          {children}
        </NextUIProvider>
        </SessionProvider>
       
      </body>
    </html>
  );
}
