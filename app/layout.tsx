import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimationProvider from "@/components/scroll-animation-provider";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Pijar Teknologi Mediatama | Solusi Teknologi Terpercaya",
  description:
    "Pijar Teknologi Mediatama menyediakan layanan IT terpercaya meliputi pengembangan software, infrastruktur jaringan, dan solusi cloud untuk bisnis Anda",
  keywords:
    "IT solution, software development, cloud computing, network infrastructure, Pijar Teknologi",
  authors: [{ name: "Pijar Teknologi Mediatama" }],
  openGraph: {
    title: "Pijar Teknologi Mediatama | Solusi Teknologi Terpercaya",
    description:
      "Pijar Teknologi Mediatama menyediakan layanan IT terpercaya meliputi pengembangan software, infrastruktur jaringan, dan solusi cloud untuk bisnis Anda",
    url: "https://pijartech.id",
    siteName: "Pijar Teknologi Mediatama",
    locale: "id_ID",
    type: "website",
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
