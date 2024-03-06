"use client";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  if (status === "loading") {
    <Loader />;
  }
  if (status === "unauthenticated" && pathname.trim().startsWith("/admin")) {
    router.push("/login");
  }
  return <div className=" overflow-x-hidden">{children}</div>;
};

export default AdminLayout;
