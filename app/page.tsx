import type { Metadata } from "next";
import HomePageClient from "./components/home/HomePageClient";

export const metadata: Metadata = {
  title: "XR Lens — Futuristic Augmented Reality Experience",
  description: "Discover XR Lens, a futuristic augmented reality interface with premium glassmorphism UI, immersive visuals, neural interaction design, and cutting-edge spatial experiences.",
  keywords: [
    "XR Lens",
    "AR Interface",
    "Futuristic UI",
    "Glassmorphism",
    "Augmented Reality",
    "Spatial Computing",
    "Apple Vision Inspired",
    "Framer Motion",
    "Premium Landing Page"
  ],
  authors: [{ name: "XR Lens Team" }],
  creator: "XR Lens",
  metadataBase: new URL("https://xr-lens.vercel.app"),
  alternates: {
    canonical: "https://xr-lens.vercel.app",
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
  openGraph: {
    title: "XR Lens — Futuristic Augmented Reality Experience",
    description: "Discover XR Lens, a futuristic augmented reality interface with premium glassmorphism UI, immersive visuals, neural interaction design, and cutting-edge spatial experiences.",
    url: "https://xr-lens.vercel.app",
    siteName: "XR Lens",
    images: [
      {
        url: "/images/svg/logo.svg",
        width: 800,
        height: 800,
        alt: "XR Lens Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XR Lens — Futuristic Augmented Reality Experience",
    description: "Discover XR Lens, a futuristic augmented reality interface with premium glassmorphism UI, immersive visuals, neural interaction design, and cutting-edge spatial experiences.",
    images: ["/images/svg/logo.svg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://xr-lens.vercel.app/#organization",
        "name": "XR Lens",
        "url": "https://xr-lens.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://xr-lens.vercel.app/images/svg/logo.svg",
          "caption": "XR Lens Logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://xr-lens.vercel.app/#website",
        "url": "https://xr-lens.vercel.app",
        "name": "XR Lens",
        "description": "Futuristic Augmented Reality Experience",
        "publisher": {
          "@id": "https://xr-lens.vercel.app/#organization"
        }
      },
      {
        "@type": "Product",
        "@id": "https://xr-lens.vercel.app/#product",
        "name": "XR Lens",
        "image": "https://xr-lens.vercel.app/images/svg/logo.svg",
        "description": "La première lentille de réalité augmentée conçue pour étendre les capacités naturelles de la vision humaine.",
        "brand": {
          "@type": "Brand",
          "name": "XR Lens"
        }
      }
    ]
  };

  return (
    <>
      <link rel="preload" href="/images/webp/video.webp" as="image" type="image/webp" {...{ fetchPriority: "high" }} />
      <link rel="preload" href="/videos/loop.webm" as="video" type="video/webm" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
