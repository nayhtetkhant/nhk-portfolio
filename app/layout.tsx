import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://nayhtetkhant.com"),
  title: {
    default: "Nay Htet Khant — Full Stack Developer",
    template: "%s | Nay Htet Khant",
  },
  description:
    "Portfolio of Nay Htet Khant, a backend-leaning full stack developer from Chiang Mai, Thailand — real-time systems, APIs, Laravel, Node.js, and Next.js.",
  applicationName: "Nay Htet Khant Portfolio",
  authors: [
    {
      name: "nayhtetkhant",
      url: "https://nayhtetkhant.com",
    },
  ],
  creator: "nayhtetkhant",
  publisher: "nayhtetkhant",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "nayhtetkhant",
    "Nay Htet Khant",
    "Full Stack Developer",
    "Backend Developer",
    "Software Engineer",
    "Laravel",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "WebRTC",
    "Real-time Systems",
    "Docker",
    "Portfolio",
    "Chiang Mai",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nay Htet Khant — Full Stack Developer",
    description:
      "Backend-leaning full stack developer building real-time systems, APIs, and databases.",
    url: "https://nayhtetkhant.com",
    siteName: "Nay Htet Khant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Nay Htet Khant — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nay Htet Khant — Full Stack Developer",
    description:
      "Backend-leaning full stack developer building real-time systems, APIs, and databases.",
    images: ["/profile.jpg"],
    creator: "@nayhtetkhant",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
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
