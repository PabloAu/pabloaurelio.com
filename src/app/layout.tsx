import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Aurelio Gomez Garcia | Study / Estudio",
  description:
    "A personal study for Pablo Aurelio Gomez Garcia spanning research, software, literature, investing, innovation, and teaching, available in English and Spanish."
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
