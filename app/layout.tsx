import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nay Htet Khant — Full Stack Developer",
  description:
    "Portfolio of Nay Htet Khant, a backend-leaning full stack developer from Chiang Mai, Thailand — real-time systems, APIs, Laravel, Node.js, and Next.js.",
  openGraph: {
    title: "Nay Htet Khant — Full Stack Developer",
    description:
      "Backend-leaning full stack developer building real-time systems, APIs, and databases.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
