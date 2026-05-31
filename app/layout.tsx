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
    "عمر السعيد — متخصص في العلاقات العامة والاتصال المؤسسي. خبرة في إدارة السمعة المؤسسية، التواصل الإعلامي، وبناء الاستراتيجيات الإعلامية للجهات الحكومية والمؤسسات.",
  keywords: [
    "عمر السعيد",
    "علاقات عامة",
    "اتصال مؤسسي",
    "إدارة السمعة",
    "تواصل إعلامي",
    "public relations",
    "corporate communication",
  ],
  authors: [{ name: "عمر السعيد" }],
  openGraph: {
    title: "عمر السعيد | متخصص في العلاقات العامة والاتصال المؤسسي",
    description:
      "متخصص في العلاقات العامة والاتصال المؤسسي. خبرة في إدارة السمعة وبناء الاستراتيجيات الإعلامية.",
    url: "https://omaralsaeed.com",
    siteName: "عمر السعيد",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عمر السعيد | العلاقات العامة والاتصال المؤسسي",
    description:
      "متخصص في العلاقات العامة والاتصال المؤسسي.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
