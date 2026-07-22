import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Aurelio Gomez Garcia | Study",
  description:
    "A vintage, image-led personal study for Pablo Aurelio Gomez Garcia's research, software, writing, apps, Slowball work, and consulting."
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
