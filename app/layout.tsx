import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opulence Foods",
  description: "Opulence Foods",
  icons: {
    shortcut: "/logo.png",
    apple: "/logo.png",
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.className} bg-almond`}>
          <Header />
        <main className="max-w-6xl mx-auto p-4">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
