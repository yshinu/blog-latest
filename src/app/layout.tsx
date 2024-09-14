import NavBar from '@/components/navBar';
import './globals.css';

import { NextUIProvider } from '@nextui-org/system';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
         <NavBar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
