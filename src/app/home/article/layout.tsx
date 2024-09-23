import { oppo } from "@/app/global";
import OtherHeader from "@/components/otherHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

       <div className={oppo.className}>
         <OtherHeader/>
          <div className="flex justify-center  bg-grid-black/[0.1] ">
          {children}
          </div>
       </div>

  );
}
