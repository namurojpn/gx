import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "デモ",
  description: "デモ",
  openGraph: {
    title: "デモ",
    description: "デモ",
    siteName: "デモ",
  },
  twitter: {
    title: "デモ",
    description: "デモ",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.className} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
