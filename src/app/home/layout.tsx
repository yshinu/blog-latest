import NavBar from '@/components/navBar';
import NextTopLoader from 'nextjs-toploader';
import Footer from '@/components/footer';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>

      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
