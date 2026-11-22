"use client";

import dynamic from "next/dynamic";
import type { PartViewerProps } from "@/src/components/PartViewer";

const PartViewer = dynamic(() => import("@/src/components/PartViewer"), {
  ssr: false,
  loading: () => (
    <div
      className="h-full w-full"
      style={{
        background: "radial-gradient(closest-side, #EAF5FC, transparent)",
      }}
      aria-hidden
    />
  ),
});

export default function DynamicPartViewer(props: PartViewerProps) {
  return <PartViewer {...props} />;
}
