import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "./context";
import Navbar from "./components/Navbar";

import { Roboto } from "next/font/google";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={roboto.className}>
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        </body>
      </html>
    </AppProvider>
  );
}
