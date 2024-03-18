import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "500", "800"], style: ["normal"], variable: ["--font-inter"] }); // different fonts will have different config options
const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: ["300", "500", "800"], style: ["normal"], variable: ["--font-jetbrains"] }); // different fonts will have different config options

export const metadata = {
  title: "BK Zupa",
  description: "Biciklisticki klub Zupa Aleksandrovac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>
        <main className="font-mono">
         <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
