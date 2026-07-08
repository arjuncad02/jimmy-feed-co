import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingOrderButton from "@/components/FloatingOrderButton";
import CursorFollower from "@/components/CursorFollower";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Jimmy's Feed Co | Waterloo's Favourite Sandwich Shop",
    template: "%s | Jimmy's Feed Co",
  },
  description:
    "Fresh sandwiches, wraps, catering and more in Waterloo. Fresh ingredients, generous portions, affordable prices at 401 Weber St N.",
  keywords: [
    "Jimmy's Feed Co",
    "Sandwiches Waterloo",
    "Best Sandwich Waterloo",
    "Lunch Waterloo",
    "Fresh Sandwiches",
    "Catering Waterloo",
  ],
  authors: [{ name: "Jimmy's Feed Co." }],
  creator: "Jimmy's Feed Co.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: "Jimmy's Feed Co.",
    title: "Jimmy's Feed Co | Waterloo's Favourite Sandwich Shop",
    description: "Fresh ingredients. Generous portions. Affordable prices. 401 Weber St N, Waterloo.",
    images: [{ url: "/images/hero/hero-sandwich.jpg", width: 1200, height: 630, alt: "Jimmy's Feed Co sandwich" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimmy's Feed Co | Waterloo's Favourite Sandwich Shop",
    description: "Fresh ingredients. Generous portions. Affordable prices.",
  },
  icons: {
    icon: "/images/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-light text-dark antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Restaurant",
                      name: "Jimmy's Feed Co.",
                      image: `${siteConfig.url}/images/hero/hero-sandwich.jpg`,
                      url: siteConfig.url,
                      telephone: siteConfig.phone,
                      servesCuisine: "Sandwiches",
                      priceRange: "$$",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: siteConfig.address.street,
                        addressLocality: siteConfig.address.city,
                        addressRegion: siteConfig.address.region,
                        addressCountry: "CA",
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.8",
                        reviewCount: "423",
                      },
                      openingHoursSpecification: siteConfig.hours
                        .filter((h) => h.time !== "Closed")
                        .map((h) => ({
                          "@type": "OpeningHoursSpecification",
                          dayOfWeek: h.day,
                          opens: h.time.split(" – ")[0],
                          closes: h.time.split(" – ")[1],
                        })),
                    }),
                  }}
                />
        <LoadingScreen />
        <CursorFollower />
        <ScrollProgressBar />
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <FloatingOrderButton />
        <MobileBottomNav />
      </body>
    </html>
  );
}
