import {
  AboutGears,
  AboutOrnament,
} from "@/src/components/Decorations";
import Section, { Container } from "@/src/components/Section";
import { aboutSection } from "@/src/data/content";

const ICON_CLASSES = ["ic a", "ic b", "ic c"] as const;

export default function About() {
  return (
    <Section id={aboutSection.id} deco={<AboutGears />}>
      <Container className="grid w-full grid-cols-1 items-center gap-[clamp(20px,4vw,64px)] min-[901px]:grid-cols-2">
        <div>
          <AboutOrnament />
          <h2 className="mb-2 font-display text-[clamp(34px,4.8vw,68px)] leading-[1.1] font-medium">
            {aboutSection.title}
          </h2>
          <p className="m-0 max-w-[640px] text-[clamp(14.5px,1.2vw,17px)] leading-[1.6] text-mut">
            {aboutSection.description}
          </p>
          <p className="quote-bar mt-5 font-display text-[clamp(18px,2vw,28px)] leading-[1.3] font-medium text-blue">
            {aboutSection.quote}
          </p>
        </div>
        <ul className="m-0 grid list-none gap-3 p-0 text-[clamp(14.5px,1.3vw,18px)]">
          {aboutSection.points.map((point, index) => (
            <li
              key={point}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_6px_24px_rgba(20,60,100,.07)]"
            >
              <i className={ICON_CLASSES[index] ?? "ic a"} aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </i>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
