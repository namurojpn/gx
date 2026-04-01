import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "令和8年度 脱炭素電源地域貢献型投資促進事業",
  description: "令和8年度「脱炭素電源地域貢献型投資促進事業」の公募ページです。地域の再生可能エネルギーへの投資を促進し、脱炭素社会の実現を目指します。",
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
