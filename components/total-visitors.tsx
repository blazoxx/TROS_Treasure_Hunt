"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function TotalVisitors() {
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Register this visit and get total count
    const registerVisit = async () => {
      try {
        const response = await fetch("/api/total-visitors", { method: "POST" });
        const data = await response.json();
        console.log("Total visitors response:", data);
        setTotal(data.total);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to register visit:", error);
        // Fallback: try to get count without incrementing
        try {
          const response = await fetch("/api/total-visitors");
          const data = await response.json();
          setTotal(data.total);
        } catch (err) {
          console.error("Failed to fetch total:", err);
        }
        setIsLoading(false);
      }
    };

    registerVisit();

    // Update every 10 seconds to show changes
    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/total-visitors");
        const data = await response.json();
        setTotal(data.total);
      } catch (error) {
        console.error("Failed to update total visitors:", error);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 text-foreground/60">
      <Eye className="w-4 h-4 text-blood-red/70" />
      <span className="text-xs">
        <span className="font-semibold text-blood-red">{total.toLocaleString()}</span>
        <span className="ml-1">total visitors</span>
      </span>
    </div>
  );
}
