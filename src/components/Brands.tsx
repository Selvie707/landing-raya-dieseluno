import Image from "next/image";
import { BrandRings } from "@/src/components/Decorations";
import Section, { Container } from "@/src/components/Section";
import { brandsSection } from "@/src/data/content";

export default function Brands() {
  return (
    <Section id={brandsSection.id} deco={<BrandRings />}>
      <Container>
        <h2 className="mb-2 font-display text-[clamp(26px,3.4vw,46px)] leading-[1.1] font-medium">
          {brandsSection.systemTitle}
        </h2>
        <div className="mt-[clamp(12px,2.4vh,22px)] mb-[clamp(26px,6vh,56px)] flex flex-nowrap gap-[clamp(8px,1.2vw,16px)]">
          {brandsSection.systemBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex min-h-[clamp(70px,14vh,120px)] min-w-0 flex-1 items-center justify-center rounded-[18px] border border-line bg-white px-2 py-3 shadow-[0_6px_24px_rgba(20,60,100,.07)] transition duration-[250ms] hover:border-blue hover:shadow-[0_10px_32px_rgba(14,127,184,.2)]"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={180}
                height={64}
                className="h-[clamp(28px,5.5vh,52px)] w-auto max-w-[90%] object-contain"
              />
            </div>
          ))}
        </div>

        <h2 className="mb-2 font-display text-[clamp(26px,3.4vw,46px)] leading-[1.1] font-medium">
          {brandsSection.machineTitle}
        </h2>
        <div className="mt-[clamp(12px,2.4vh,22px)] grid grid-cols-3 gap-2.5 max-[560px]:grid-cols-3 min-[561px]:max-[900px]:grid-cols-4 min-[901px]:grid-cols-7">
          {brandsSection.machineBrands.map((brand) => {
            const darkBg = brand.name === "CAT" || brand.name === "Hyundai";
            return (
              <div
                key={brand.name}
                className={`flex min-h-[clamp(56px,10vh,92px)] items-center justify-center rounded-2xl border border-line p-3 shadow-[0_6px_24px_rgba(20,60,100,.07)] transition duration-[250ms] hover:border-blue hover:shadow-[0_10px_32px_rgba(14,127,184,.2)] ${
                  darkBg ? "bg-[#0B1F33]" : "bg-white"
                }`}
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={140}
                  height={48}
                  className="h-[clamp(22px,4.2vh,40px)] w-auto max-w-[85%] object-contain"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
