import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Registration Form",
  description: "next react app with zod",
};

const tahoma = localFont({
    src: "./fonts/tahoma.ttf",
    variable: "--font-tahoma",
    weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tahoma.variable}>
        {children}
      </body>
    </html>
  );
}
