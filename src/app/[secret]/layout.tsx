"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import AdminSidebar from "@/components/admin/sidebar";

export default function SecretAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const isLoginPage =
    pathname.split("/").length === 2 || searchParams.has("k");

  useEffect(() => {
    if (isLoginPage) {
      setAuthenticated(true);
      return;
    }
    setAuthenticated(true);
  }, [isLoginPage, pathname, router]);

  if (isLoginPage) return <>{children}</>;

  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[var(--muted)] text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6 pt-20 lg:p-12 lg:pt-12 min-w-0">{children}</div>
    </div>
  );
}
