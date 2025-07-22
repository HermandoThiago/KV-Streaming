import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KV Streaming",
  description: "Streaming de qualidade pelo melhor preço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth antialiased">
      <body className={inter.className} suppressHydrationWarning>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
