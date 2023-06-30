import { Inter } from "@next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/reset.css";
import "@/styles/global.css";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
