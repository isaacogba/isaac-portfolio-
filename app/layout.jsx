import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/ui/PageTransition";
import Header from "@/components/ui/Header";
import Nav from "@/components/ui/Nav";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Isaac Ogba | Portfolio",
  description: "Full-Stack Developer Portfolio of Isaac Ogba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable} bg-primary text-white overflow-x-hidden`}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
