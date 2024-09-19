import NavBar from '@/components/navBar';
import './globals.css';

import { NextUIProvider } from '@nextui-org/system';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';
import localFont from 'next/font/local'
import Footer from '@/components/footer';

const oppo = localFont({
  src: [
    {
      path: '../../public/fonts/opposans.woff2',
      weight: '400',
      style: 'normal',
    },
  ]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oppo.className}>
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
