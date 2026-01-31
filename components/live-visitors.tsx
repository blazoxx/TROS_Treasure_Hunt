"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export function LiveVisitors() {
  const [visitors, setVisitors] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    const fetchVisitors = async () => {
      try {
        const response = await fetch("/api/visitors");
        const data = await response.json();
        setVisitors(data.count);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch visitors:", error);
        setIsLoading(false);
      }
    };

    fetchVisitors();

    // Update every 3 seconds to simulate live activity
    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/visitors", { method: "POST" });
        const data = await response.json();
        setVisitors(data.count);
      } catch (error) {
        console.error("Failed to update visitors:", error);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/50 border border-slate-700/50">
        <div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-slate-400">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-red-950/30 border border-red-900/50 hover:border-red-800 transition-colors md:px-3 md:py-2 md:gap-2">
      <div className="flex items-center gap-1 md:gap-1.5">
        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse md:w-2 md:h-2" />
        <Users className="w-3 h-3 text-red-400 md:w-3.5 md:h-3.5" />
      </div>
      <span className="text-xs font-semibold text-red-300 md:text-xs">
        {visitors} <span className="text-red-400/70 hidden sm:inline">live</span>
      </span>
    </div>
  );
}
