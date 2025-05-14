import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider"
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "empal03 - Clone YT Music",
  description: "empal03 - Clone YT Music",
  openGraph: {
    title: "empal03 - Clone YT Music",
    description: "empal03 - Clone YT Music",
    images: "/main-logo.svg",
    url: "https://yt-music-three.vercel.app/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar>{children}</Sidebar>
        </ThemeProvider>  
      </body>
    </html>
  );
}
