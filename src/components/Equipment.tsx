import Image from "next/image";
import Section, { Container } from "@/src/components/Section";
import { equipmentSection, site } from "@/src/data/content";

export default function Equipment() {
  return (
    <Section id={equipmentSection.id}>
      <Container>
        <h2 className="mb-2 font-display text-[clamp(26px,3.4vw,46px)] leading-[1.1] font-medium">
          {equipmentSection.title}
        </h2>
        <p className="m-0 max-w-[640px] text-[clamp(14.5px,1.2vw,17px)] leading-[1.6] text-mut">
          {equipmentSection.description}
        </p>

        <div className="mt-[clamp(12px,2.4vh,22px)] grid grid-cols-1 gap-3 max-[560px]:grid-cols-1 min-[561px]:max-[900px]:grid-cols-2 min-[901px]:grid-cols-4">
          {equipmentSection.items.map((item) => (
            <article
              key={item.code}
              className="relative overflow-hidden rounded-[18px] border border-line bg-white p-[clamp(14px,1.5vw,22px)] shadow-[0_6px_24px_rgba(20,60,100,.07)] transition duration-[250ms] hover:border-blue hover:shadow-[0_10px_32px_rgba(14,127,184,.18)]"
            >
              <div className="mb-3 flex h-[clamp(110px,16vh,160px)] items-center justify-center overflow-hidden rounded-xl bg-[#F3F7FB]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={200}
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div className="mb-[clamp(6px,1.4vh,14px)] font-display text-[clamp(22px,2.4vw,34px)] font-bold text-ad">
                {item.code}
              </div>
              <h3 className="mb-1.5 font-display text-[clamp(15px,1.2vw,18px)] font-medium">
                {item.title}
              </h3>
              <p className="m-0 text-[clamp(13px,.95vw,14.5px)] leading-[1.5] text-mut">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 items-center gap-6 rounded-[20px] border border-line bg-gradient-to-br from-[#DDEEF9] to-white p-[clamp(16px,2vw,28px)] min-[901px]:grid-cols-[.8fr_1.5fr_auto]">
          <h3 className="font-display text-[clamp(18px,1.7vw,24px)] font-medium">
            {equipmentSection.supportTitle}
          </h3>
          <ul className="m-0 grid list-none gap-1.5 p-0 text-[clamp(13px,.95vw,14.5px)] leading-[1.45] text-tx">
            {equipmentSection.supportItems.map((item) => (
              <li
                key={item}
                className="relative pl-[15px] before:absolute before:top-[9px] before:left-0 before:h-0.5 before:w-[7px] before:bg-amber before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href={site.whatsappUrl}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#FFD07A] to-amber px-6 text-[15px] font-semibold text-tx shadow-[0_8px_22px_rgba(245,166,35,.4)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {equipmentSection.supportCta}
          </a>
        </div>
      </Container>
    </Section>
  );
}
