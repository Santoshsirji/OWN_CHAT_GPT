import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import SideBar from "@/components/navbar/SideBar";
import ToasterProvider from "@/providers/toastprovider";
// import Authentication from "@/components/auth/Authentication";



const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "Tutor Hub",
  description: "This is the ai Platform",
  icons: {
    icon: "/next.svg",
  },
};

export default async function RootLayout({ children }: {children: React.ReactNode}) {




  return (
    <html lang="en">
      <body className={poppins.className}>
        <Suspense>
          <ToasterProvider/>
          <Navbar/>
          <SideBar/>
          {/* <Authentication/> */}
          <div
            className="pt-16 h-full w-full"
          >
           
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}