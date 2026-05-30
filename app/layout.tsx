import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRM MET MASH PROJECTS",
  description:
    "Industrial solutions for bearings, lubricants, induction heaters, rolls, wire ropes and industrial spares.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}