"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("accessToken");
      if (!token) {
        router.push("/");
      }
    }
  }, [router]);

  return typeof window !== "undefined" ? children : null;
};

export default ProtectedRoute;
