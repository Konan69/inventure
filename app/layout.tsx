import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client-layout";
import { Inter } from "next/font/google";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { ExpandableChat } from "@/components/ui/expandable-chat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "iinventure – Recruiting Without Limits",
  description:
    "Recruitment, rewritten: revenue sharing, a marketing engine, a competitive broker community, and an AI-driven learning platform.",
  generator: "v0.app",
  keywords: [
    "recruitment",
    "hiring platform",
    "AI recruiting",
    "revenue sharing",
    "talent acquisition",
  ],
  authors: [{ name: "iinventure" }],
  openGraph: {
    title: "iinventure – Recruiting Without Limits",
    description:
      "Speed and scale for modern hiring. Trusted by 500+ companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased font-bold`}
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        <ClientLayout>
          {/* <div className="relative z-0 flex h-[full] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
            <InteractiveGridPattern
              className={cn("repeating-bg-background")}
              width={20}
              height={20}
              squares={[80, 80]}
              squaresClassName="hover:fill-background z-0"
            />
            {children}
          </div> */}
          {children}
          <ExpandableChat />
        </ClientLayout>
      </body>
    </html>
  );
}
