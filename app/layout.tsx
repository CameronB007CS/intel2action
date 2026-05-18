import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "@/components/layout/Nav";
import IntelTicker from "@/components/layout/IntelTicker";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Intel 2 Action | Operational CTI & OSINT Training",
  description:
    "Elite cyber threat intelligence and OSINT training built by a 20-year counter-terrorism operator. Stop collecting intel. Start driving operations.",
  openGraph: {
    title: "Intel 2 Action",
    description: "Stop collecting intel. Start driving operations.",
    siteName: "Intel 2 Action",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Scan-line overlay — pure atmosphere */}
        <div className="scan-overlay" aria-hidden="true" />

        <Nav />
        <IntelTicker />

        <main className="pt-[60px]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
