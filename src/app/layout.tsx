import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://kumarprince.is-a.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Prince Kumar | Developer & Thinker",
    template: "%s | Prince Kumar",
  },
  description:
    "Portfolio of Prince Kumar — a full-stack developer building digital experiences with purpose. Specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Prince Kumar",
    "full-stack developer",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "web developer",
    "frontend developer",
    "backend developer",
    "New Delhi",
    "India",
  ],
  authors: [{ name: "Prince Kumar" }],
  creator: "Prince Kumar",
  icons: {
    icon: "/profile.png",
    apple: "/profile.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Prince Kumar Portfolio",
    title: "Prince Kumar | Developer & Thinker",
    description:
      "Portfolio of Prince Kumar — a full-stack developer building digital experiences with purpose.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prince Kumar — Developer & Thinker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Kumar | Developer & Thinker",
    description:
      "Portfolio of Prince Kumar — a full-stack developer building digital experiences with purpose.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "tbthAJ4fDwbbCbjvUuI8b-wWsa2N3NJQWLBYR-T-Es4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="min-h-full flex flex-col grain">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Nav />
          <main className="flex-1 pt-[60px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
