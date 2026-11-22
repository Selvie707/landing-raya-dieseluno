import Image from "next/image";
import type { EquipmentItem } from "@/src/data/content";
import { whatsappAskUrl } from "@/src/data/content";

export default function CatalogEquipmentCard({
  item,
}: {
  item: EquipmentItem;
}) {
  const askLabel = `${item.code} ${item.title}`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-white p-4 shadow-[0_6px_24px_rgba(20,60,100,.07)] transition duration-[250ms] hover:border-blue hover:shadow-[0_10px_32px_rgba(14,127,184,.18)]">
      <div className="mb-3.5 flex h-[210px] items-center justify-center rounded-[14px] bg-[radial-gradient(closest-side,#E4F1FA,#F3F8FC)] p-2.5">
        <Image
          src={item.image}
          alt={`${item.code} ${item.title}`}
          width={320}
          height={210}
          className="max-h-full max-w-full object-contain transition-transform duration-[350ms] group-hover:scale-[1.06]"
        />
      </div>
      <h3 className="mb-1 font-display text-[17px] leading-[1.25] font-medium">
        {item.title}
      </h3>
      <p className="mb-1 text-sm leading-[1.5] text-mut">{item.description}</p>
      <a
        href={whatsappAskUrl(askLabel)}
        className="mt-3.5 inline-block text-[13.5px] font-semibold text-blue hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tanya via WhatsApp →
      </a>
    </article>
  );
}
