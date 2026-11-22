import DynamicPartViewer from "@/src/components/DynamicPartViewer";
import Section, { Container } from "@/src/components/Section";
import { hero, site } from "@/src/data/content";

export default function Hero() {
  return (
    <Section id={hero.id}>
      <Container className="grid w-full grid-cols-1 items-center gap-5 min-[901px]:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-[2] order-2 min-w-0 min-[901px]:order-none">
          <p className="font-display text-[clamp(17px,1.8vw,24px)] font-medium text-blue">
            {hero.subtitle}
          </p>
          <h1 className="my-4 bg-gradient-to-b from-tx from-[35%] to-blue bg-clip-text font-display text-[clamp(38px,5.4vw,80px)] leading-[1.03] font-bold tracking-[-0.02em] text-transparent">
            {hero.title}
          </h1>
          <p className="m-0 max-w-[640px] text-[clamp(14.5px,1.2vw,17px)] leading-[1.6] text-mut">
            {hero.description}
          </p>
          <p className="my-5 max-w-[520px] text-xs leading-[1.6] font-bold tracking-[0.16em] text-ad">
            {hero.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.whatsappUrl}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2AA8FF] to-blue px-6 text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(14,127,184,.35)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.whatsappCta}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border-[1.5px] border-tx/30 bg-white px-6 text-[15px] font-semibold"
            >
              {hero.emailCta}
            </a>
          </div>
        </div>

        <div className="relative z-[1] order-1 h-[36vh] w-full min-w-0 min-[901px]:order-none min-[901px]:h-[min(70vh,660px)]">
          <DynamicPartViewer
            type={hero.partType}
            scale={hero.partScale}
            aria-label="Model 3D injektor diesel"
            className="h-full w-full"
          />
          <p className="absolute right-0 bottom-0 text-[12.5px] text-mut">
            {hero.hint}
          </p>
        </div>
      </Container>
    </Section>
  );
}
