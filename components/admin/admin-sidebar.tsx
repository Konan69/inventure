"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState, useMemo } from "react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Blog Posts", href: "/admin/blog", icon: FileText },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = useMemo(
    () =>
      navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            title={isCollapsed ? item.name : undefined}
          >
            <item.icon
              className={cn(
                "h-5 w-5 flex-shrink-0",
                isCollapsed ? "mr-0" : "mr-3",
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground group-hover:text-accent-foreground"
              )}
            />
            {!isCollapsed && item.name}
          </Link>
        );
      }),
    [pathname, isCollapsed]
  );

  return (
    <div
      className={cn(
        "flex h-full flex-col bg-card border-r border-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {!isCollapsed && (
          <Link href="/admin" className="text-xl font-black text-foreground">
            Admin
          </Link>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-muted-foreground hover:text-foreground"
        >
          {isCollapsed ? (
            <Menu className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 space-y-1 px-2 py-4">{navigationItems}</nav>

      <div className="border-t border-border p-4 space-y-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => (window.location.href = "/admin/login")}
          className={cn(
            "w-full text-muted-foreground hover:text-accent-foreground",
            isCollapsed ? "justify-center" : "justify-start"
          )}
          title={isCollapsed ? "Sign Out" : undefined}
        >
          <LogOut className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
          {!isCollapsed && "Sign Out"}
        </Button>
      </div>
    </div>
  );
}
