import Image from "next/image";
import type { Product } from "@/src/data/content";
import { whatsappAskUrl } from "@/src/data/content";

export default function CatalogProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-white p-4 shadow-[0_6px_24px_rgba(20,60,100,.07)] transition duration-[250ms] hover:border-blue hover:shadow-[0_10px_32px_rgba(14,127,184,.18)]">
      <span className="absolute top-2 right-3.5 font-display text-[30px] font-light text-[#B9CFE2]">
        {product.no}
      </span>
      <div className="mb-3.5 flex h-[170px] items-center justify-center rounded-[14px] bg-[radial-gradient(closest-side,#E4F1FA,#F3F8FC)] p-2.5">
        <Image
          src={product.image}
          alt={product.title}
          width={280}
          height={170}
          className="max-h-full max-w-full object-contain transition-transform duration-[350ms] group-hover:scale-[1.06]"
        />
      </div>
      <h3 className="mb-1.5 font-display text-[17px] leading-[1.25] font-medium">
        {product.title}
      </h3>
      <ul className="m-0 flex-1 list-none p-0 text-[clamp(12.5px,.92vw,13.5px)] leading-[1.4] text-mut">
        {product.items.map((item) => (
          <li
            key={item}
            className="relative py-[1.5px] pl-[15px] before:absolute before:top-2.5 before:left-0 before:h-0.5 before:w-[7px] before:bg-amber before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
      <a
        href={whatsappAskUrl(product.title)}
        className="mt-3.5 inline-block text-[13.5px] font-semibold text-blue hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tanya via WhatsApp →
      </a>
    </article>
  );
}
