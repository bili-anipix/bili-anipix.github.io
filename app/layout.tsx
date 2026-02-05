import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AniPix - Discover Beautiful Animation Art",
  description:
    "a bilibili site for discovering beautiful animation art, including anime, manga, and illustration.",
  icons: {
    icon: [
      {
        url: "/favicon.png",
      },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F72LVLBFN4"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F72LVLBFN4');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
