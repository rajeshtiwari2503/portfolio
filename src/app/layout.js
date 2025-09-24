 import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Rajesh Tiwari | Portfolio",
  description:
    "Professional portfolio of Rajesh Tiwari. Specialized in Admin Panels, Dashboards, and CRM Solutions.",
  keywords: [
    "Rajesh Tiwari",
    "Portfolio",
    "Admin Panels",
    "Dashboards",
    "CRM Solutions",
    "Web Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: "Rajesh Tiwari" }],
  creator: "Rajesh Tiwari",
  publisher: "Rajesh Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajesh.saastechify.com",
    siteName: "Rajesh Tiwari Portfolio",
    title: "Rajesh Tiwari | Portfolio",
    description:
      "Showcasing expertise in building Admin Panels, Dashboards, and CRM Solutions.",
    images: [
      {
        url: "https://rajesh.saastechify.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajesh Tiwari Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Tiwari | Portfolio",
    description:
      "Showcasing expertise in building Admin Panels, Dashboards, and CRM Solutions.",
    images: ["https://rajesh.saastechify.com/og-image.jpg"],
    creator: "@yourTwitterHandle", // replace with your handle
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rajesh.saastechify.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
