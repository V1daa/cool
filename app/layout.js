import { Pacifico as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
