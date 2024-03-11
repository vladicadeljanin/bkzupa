import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "500", "800"], style: ["normal"], variable: ["--font-inter"] }); // different fonts will have different config options

export const metadata = {
  title: "BK Zupa",
  description: "Biciklisticki klub Zupa Aleksandrovac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="font-normal">
         <Header />
          {children}
          {/* Footer */}
        </main>
      </body>
    </html>
  );
}
