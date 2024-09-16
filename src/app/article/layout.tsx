import OtherHeader from "@/components/otherHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

       <div>
         <OtherHeader/>
          <div className="flex justify-center">
          {children}
          </div>
       </div>

  );
}
