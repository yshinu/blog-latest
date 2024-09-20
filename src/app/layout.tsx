import NavBar from '@/components/navBar';
import './globals.css';

import { NextUIProvider } from '@nextui-org/system';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';

import Footer from '@/components/footer';
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
        <NextUIProvider>
        <NextTopLoader color='#b249f8' />
         <NavBar />
          {children}
          <Footer/>
        </NextUIProvider>
        </SessionProvider>
       
      </body>
    </html>
  );
}
