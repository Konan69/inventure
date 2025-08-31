"use client";

import type React from "react";
import AdminSidebar from "@/components/admin/admin-sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  return (
    <div
      className="admin-bg flex h-screen transition-colors duration-200"
      style={{
        backgroundColor: "rgb(22 21 19 / 1)",
      }}
    >
      <style jsx global>{`
        [data-theme="light"] .admin-bg {
          background-color: rgb(253 252 251 / 1) !important;
        }
        [data-theme="dark"] .admin-bg {
          background-color: rgb(22 21 19 / 1) !important;
        }
        .light .admin-bg {
          background-color: rgb(253 252 251 / 1) !important;
        }
        .dark .admin-bg {
          background-color: rgb(22 21 19 / 1) !important;
        }
      `}</style>
      {!isLoginPage && <AdminSidebar />}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </main>
    </div>
  );
}
