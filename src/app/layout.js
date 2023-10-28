import { yekan } from "@/utilities/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import NextAuthProvider from "src/providers/NextAuthProvider";

export const metadata = {
  title: "مشاور املاک",
  description: "پروژه خرید و فروش املاک ",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
