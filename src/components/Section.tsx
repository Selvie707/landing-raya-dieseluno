import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  deco?: ReactNode;
};

export default function Section({
  id,
  children,
  className = "",
  deco,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative z-[1] flex min-h-[100vh] min-h-[100svh] w-full snap-start items-center overflow-hidden px-0 pb-7 pt-[84px] before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(520px_380px_at_10%_25%,rgba(42,168,255,.14),transparent_70%),radial-gradient(480px_380px_at_92%_85%,rgba(245,166,35,.13),transparent_70%)] before:content-[''] ${className}`}
    >
      {deco}
      {children}
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative z-[1] mx-auto w-full max-w-[1280px] px-[clamp(18px,3vw,40px)] ${className}`}
    >
      {children}
    </div>
  );
}
