import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimationProvider from "@/components/scroll-animation-provider";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Pijar Teknologi Mediatama",
  description: "Created with v0",
  generator: "v0.dev",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollAnimationProvider>{children}</ScrollAnimationProvider>
      </body>
    </html>
  );
}
