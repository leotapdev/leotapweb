import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LeoTap",
  description: "Get your basic needs all in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-primary w-full overflow-hidden">
          <div className="paddingX flexCenter">
            <div className="boxWidth">
              <Navbar />
            </div>
          </div>
          {children}
          <div className="paddingX flexStart">
            <div className="boxWidth">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
