import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LeoTap",
  description: "Get your basic needs all in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
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
