import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Management Portal",
  description:
    "Maharaja Surajmal Institute of Technology Management Portal created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "h-screen"} style={{ margin: 0 }}>
        <div className="h-[11rem]">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-11rem)]">{children}</div>
      </body>
    </html>
  );
}
