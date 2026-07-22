import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Aurelio Gomez Garcia | Interactive Atlas",
  description:
    "An interactive atlas of Pablo Aurelio Gomez Garcia's research, software, writing, apps, capital work, and analytical consulting."
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
