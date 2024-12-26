import type { Metadata } from "next";
import { Poppins} from 'next/font/google';
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NextBlog - Master Next.js with Expert Tutorials",
  description: "Discover the power of Next.js with NextBlog! Explore in-depth tutorials, best practices, and tips to build fast, modern, and scalable web applications. Perfect for developers at all levels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
