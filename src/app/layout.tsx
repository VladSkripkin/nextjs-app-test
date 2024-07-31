import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test",
  description: "Test next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="scroll-smooth">
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <body className={notoSans.className}>
                  <Header/>
                  {children}
                  <Footer />
              </body>
      </html>
  );
}
