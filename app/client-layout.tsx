"use client";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { MinimalNavigation } from "@/components/minimal-navigation";
import { usePathname } from "next/navigation";

function ConditionalNavigation() {
  const pathname = usePathname();

  // Hide navigation on all admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <MinimalNavigation />;
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
    >
      <ConditionalNavigation />
      {children}
    </ThemeProvider>
  );
}
