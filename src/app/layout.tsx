import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Aurelio Gomez Garcia | Research, Software, Writing",
  description:
    "Personal website of Pablo Aurelio Gomez Garcia spanning research, software, apps, writing, and analytical consulting."
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
