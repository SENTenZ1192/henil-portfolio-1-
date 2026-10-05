import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";
const origin =
  process.env.NEXT_PUBLIC_SITE_URL || "https://henilparmar1208.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Henil Parmar — Aerospace, Control & Motorsport",
    template: "%s — Henil Parmar",
  },
  description:
    "IIT Bombay Aerospace Engineering. Modelling, estimating, optimizing and controlling high-performance systems, from spacecraft to race cars.",
  openGraph: {
    type: "website",
    title: "Henil Parmar",
    description: "Dynamics / Control / Optimization. From orbit to apex.",
    images: [{ url: "/social.webp", width: 1536, height: 864 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Henil Parmar",
              url: origin,
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Indian Institute of Technology Bombay",
              },
              knowsAbout: [
                "Aerospace Engineering",
                "Optimal Control",
                "State Estimation",
                "Vehicle Dynamics",
              ],
              sameAs: ["https://github.com/SENTenZ1192"],
            }),
          }}
        />
      </body>
    </html>
  );
}
