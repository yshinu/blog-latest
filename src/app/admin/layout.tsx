import SidebarConponent from "./SidebarConponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
    <SidebarConponent>
      {children}
    </SidebarConponent>
   </div>
  );
}
