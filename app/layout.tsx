import type { Metadata } from "next";
import { Tajawal, Inter } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "عمر السعيد | متخصص في العلاقات العامة والاتصال المؤسسي",
  description:
    "متخصص في العلاقات العامة والاتصال المؤسسي. خبرة في إدارة السمعة المؤسسية والتواصل الإعلامي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${inter.variable}`}>
      <body className="min-h-full bg-white text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
