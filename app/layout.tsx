import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site";

const fontNotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:["Next.js", "React", "Tailwindcss","shadcn/ui"],
  authors: [
    {
      name: "Yasucode",
      url: siteConfig.url,
    },
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "ja",
    url: siteConfig.url,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creater: "@shincode",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
      className={cn(
        "bg-background antialiased min-h-screen",
        fontNotoSansJP.className
      )}
      >
        {children}
        </body>
    </html>
  );
}
