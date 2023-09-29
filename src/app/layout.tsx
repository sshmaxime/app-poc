import "@fontsource/inter";

import "./style.css";

import type { Metadata } from "next";

import { Header } from "./_layout/header";
import { Footer } from "./_layout/footer";
import ThemeRegistry from "./style";

export const metadata: Metadata = {
  title: "Homē",
  description: "Your Home Dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <body>
        <ThemeRegistry options={{ key: "joy" }}>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
