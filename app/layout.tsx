import React, { memo } from "react";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
// import "./globals.css";
import "@/styles/globalStyles.scss";
import Head from "next/head";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jesadakorn Kirtnu",
  description: "My resume and portfolio website.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: NextPage<RootLayoutProps> = memo(({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {/* <Head>
            <link
              key="canonical"
              rel="canonical"
            />

            <link href="/favicon.ico" rel="icon" sizes="any" />
            <link href="/icon.svg" rel="icon" type="image/svg+xml" />
            <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
            <link href="/site.webmanifest" rel="manifest" />

            <meta
              property="og:url"
            />

          </Head> */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
});
RootLayout.displayName = "RootLayout";
export default RootLayout;
