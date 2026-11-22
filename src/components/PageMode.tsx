"use client";

import { useEffect } from "react";

/** Disables homepage scroll-snap on non-home pages. */
export default function PageMode({ mode }: { mode: "home" | "page" }) {
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "page") {
      root.classList.add("no-snap");
    } else {
      root.classList.remove("no-snap");
    }
    return () => root.classList.remove("no-snap");
  }, [mode]);

  return null;
}
