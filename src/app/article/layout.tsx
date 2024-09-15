import OtherHeader from "@/components/otherHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

       <div>
         <OtherHeader/>
         {children}
       </div>

  );
}
