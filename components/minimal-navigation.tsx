"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "./ui/drawer";

export function MinimalNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/community", label: "Community" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-black">
          INVENTURE<span className="sr-only">inventure</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button asChild size="sm" className="font-semibold">
              <Link href="/contact">Find Your Next Hire</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="px-4">Menu</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 pb-6 pt-2">
                  <div className="flex flex-col gap-4 text-base">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`font-medium ${
                          pathname === item.href
                            ? "text-foreground"
                            : "text-foreground/70"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button asChild className="w-full font-semibold">
                      <Link href="/contact">Find Your Next Hire</Link>
                    </Button>
                  </div>
                  <div className="mt-4">
                    <DrawerClose asChild>
                      <Button variant="outline" className="w-full">
                        Close
                      </Button>
                    </DrawerClose>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
