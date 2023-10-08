import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Rubik, Roboto } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500"],
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nodewave",
  description: "Nodewave official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${poppins.variable} ${rubik.variable} ${roboto.variable}`}
      lang="en"
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
