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
      <NextTopLoader color="#b249f8" />
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
