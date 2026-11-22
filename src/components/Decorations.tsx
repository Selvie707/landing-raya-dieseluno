export function HexCluster() {
  return (
    <svg
      className="deco hxc"
      viewBox="0 0 160 130"
      aria-hidden
    >
      <polygon
        points="40,6 70,23 70,57 40,74 10,57 10,23"
        fill="none"
        stroke="rgba(14,127,184,.4)"
      />
      <polygon
        points="100,40 130,57 130,91 100,108 70,91 70,57"
        fill="rgba(14,127,184,.1)"
        stroke="rgba(14,127,184,.35)"
      />
      <polygon
        points="40,84 52,91 52,105 40,112 28,105 28,91"
        fill="#F5A623"
      />
    </svg>
  );
}

export function HeroRings() {
  return (
    <svg className="deco rings" viewBox="0 0 400 400" aria-hidden>
      <circle
        cx="200"
        cy="200"
        r="190"
        fill="none"
        stroke="rgba(14,127,184,.22)"
      />
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="rgba(14,127,184,.2)"
        strokeDasharray="3 7"
      />
      <polygon
        points="200,28 349,114 349,286 200,372 51,286 51,114"
        fill="none"
        stroke="rgba(14,127,184,.18)"
      />
      <circle
        className="spin"
        cx="200"
        cy="200"
        r="120"
        fill="none"
        stroke="rgba(245,166,35,.65)"
        strokeWidth="2.5"
        strokeDasharray="46 310"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandRings() {
  return (
    <svg className="deco rg" viewBox="0 0 400 400" aria-hidden>
      <circle
        cx="200"
        cy="200"
        r="190"
        fill="none"
        stroke="rgba(14,127,184,.2)"
      />
      <circle
        cx="200"
        cy="200"
        r="140"
        fill="none"
        stroke="rgba(14,127,184,.18)"
        strokeDasharray="3 7"
      />
      <circle
        cx="200"
        cy="200"
        r="90"
        fill="none"
        stroke="rgba(245,166,35,.4)"
      />
    </svg>
  );
}

function GearSvg({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" aria-hidden>
      <circle
        cx="120"
        cy="120"
        r="100"
        fill="none"
        stroke="rgba(14,127,184,.15)"
        strokeWidth="16"
        strokeDasharray="15.7 15.7"
      />
      <circle
        cx="120"
        cy="120"
        r="84"
        fill="none"
        stroke="rgba(14,127,184,.22)"
      />
      <circle
        cx="120"
        cy="120"
        r="52"
        fill="none"
        stroke="rgba(14,127,184,.16)"
        strokeDasharray="3 6"
      />
      <circle
        cx="120"
        cy="120"
        r="34"
        fill="none"
        stroke="rgba(245,166,35,.55)"
        strokeWidth="2"
      />
      <circle cx="120" cy="120" r="7" fill="rgba(245,166,35,.7)" />
    </svg>
  );
}

export function AboutGears() {
  return (
    <>
      <GearSvg className="deco gear g1" />
      <GearSvg className="deco gear g2" />
      <svg className="deco hexbig" viewBox="0 0 200 180" aria-hidden>
        <polygon
          points="50,10 150,10 195,90 150,170 50,170 5,90"
          fill="none"
          stroke="rgba(14,127,184,.22)"
          strokeWidth="1.5"
        />
        <polygon
          points="62,34 138,34 172,90 138,146 62,146 28,90"
          fill="rgba(14,127,184,.05)"
          stroke="rgba(14,127,184,.16)"
        />
      </svg>
    </>
  );
}

export function ContactRings() {
  return (
    <svg className="deco crings" viewBox="0 0 800 800" aria-hidden>
      <circle
        cx="400"
        cy="400"
        r="150"
        fill="none"
        stroke="rgba(14,127,184,.2)"
      />
      <circle
        cx="400"
        cy="400"
        r="230"
        fill="none"
        stroke="rgba(14,127,184,.16)"
        strokeDasharray="4 9"
      />
      <circle
        cx="400"
        cy="400"
        r="310"
        fill="none"
        stroke="rgba(14,127,184,.14)"
      />
      <circle
        className="spin"
        cx="400"
        cy="400"
        r="380"
        fill="none"
        stroke="rgba(245,166,35,.5)"
        strokeWidth="2.5"
        strokeDasharray="90 2300"
        strokeLinecap="round"
        style={{ animationDuration: "40s" }}
      />
    </svg>
  );
}

export function AboutOrnament() {
  return (
    <div className="orn" aria-hidden>
      <i />
      <i />
      <i />
    </div>
  );
}
