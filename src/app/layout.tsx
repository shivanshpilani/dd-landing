import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conquest Demo Day 2025 | 10th August | Bangalore",
  description: "Join Conquest Demo Day 2025 on August 10th in Bangalore. Watch 14 early-stage startups pitch to India's top VCs and Angels for an equity-less cash grant worth over ₹30 lakhs. Register now!",
  keywords: "Demo Day, Startup Pitch, VC Funding, Bangalore, Conquest, BITS Pilani, Startup Accelerator",
  openGraph: {
    title: "Conquest Demo Day 2025 | 10th August | Bangalore",
    description: "Join Conquest Demo Day 2025 on August 10th in Bangalore. Watch 14 early-stage startups pitch to India's top VCs and Angels for an equity-less cash grant worth over ₹30 lakhs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conquest Demo Day 2025 | 10th August | Bangalore",
    description: "Join Conquest Demo Day 2025 on August 10th in Bangalore. Watch 14 early-stage startups pitch to India's top VCs and Angels.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
