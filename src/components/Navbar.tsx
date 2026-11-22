"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/src/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        }
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [onHome]);

  function isActive(href: string, match: "path" | "hash") {
    if (match === "path") {
      return pathname === href || pathname.startsWith(`${href}/`);
    }
    if (!onHome) return false;
    const hash = href.includes("#") ? `#${href.split("#")[1]}` : href;
    return activeHash === hash;
  }

  return (
    <nav
      className="fixed top-[calc(12px+env(safe-area-inset-top,0px))] right-0 left-0 z-20 flex items-center justify-between px-6 max-[900px]:px-3.5"
      aria-label="Navigasi utama"
    >
      <div className="flex gap-0.5 rounded-full border border-line bg-white/[0.82] p-1 shadow-[0_6px_22px_rgba(20,60,100,.1)] backdrop-blur-[14px]">
        <Link
          href="/#beranda"
          className="flex items-center gap-2.5 font-display text-[17px] font-bold whitespace-nowrap"
        >
          <i
            className="inline-block h-3 w-3 rounded-[4px] bg-amber shadow-[0_0_10px_rgba(245,166,35,.8)]"
            aria-hidden
          />
          {site.name}
        </Link>
      </div>

      <div className="flex gap-0.5 rounded-full border border-line bg-white/[0.82] p-1 shadow-[0_6px_22px_rgba(20,60,100,.1)] backdrop-blur-[14px] max-[900px]:[&>a:nth-child(n+2)]:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-[15px] py-[9px] text-sm font-medium whitespace-nowrap ${
              isActive(link.href, link.match) ? "bg-blue text-white" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <a
        href={site.whatsappUrl}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2AA8FF] to-blue px-6 text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(14,127,184,.35)] max-[900px]:hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </nav>
  );
}
