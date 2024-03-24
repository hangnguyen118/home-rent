import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/containers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen Thi Dieu Hang",
  description: "Create by Hang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
