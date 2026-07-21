import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Aurelio Gomez Garcia",
  description:
    "Research, software, apps, writing, and analytical work by Pablo Aurelio Gomez Garcia."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
