import DynamicPartViewer from "@/src/components/DynamicPartViewer";
import type { Product } from "@/src/data/content";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export default function ProductCard({
  product,
  className = "",
}: ProductCardProps) {
  return (
    <article
      className={`relative col-span-3 overflow-hidden rounded-[18px] border border-line bg-white p-[clamp(12px,1.3vw,18px)] shadow-[0_6px_24px_rgba(20,60,100,.07)] transition duration-[250ms] hover:border-blue hover:shadow-[0_10px_32px_rgba(14,127,184,.18)] max-[560px]:col-span-12 max-[900px]:col-span-6 [&:nth-child(n+5)]:col-span-4 max-[900px]:[&:nth-child(n+5)]:col-span-6 max-[560px]:[&:nth-child(n+5)]:col-span-12 ${className}`}
    >
      <span className="absolute top-2 right-3.5 font-display text-[30px] font-light text-[#B9CFE2]">
        {product.no}
      </span>
      <div className="mb-1 h-[clamp(100px,15vh,160px)]">
        <DynamicPartViewer
          type={product.partType}
          scale={product.scale ?? 1}
          compact
          aria-label={`Model 3D ${product.title}`}
        />
      </div>
      <h3 className="mb-1.5 font-display text-[clamp(14.5px,1.15vw,17px)] leading-[1.25] font-medium">
        {product.title}
      </h3>
      <ul className="m-0 list-none p-0 text-[clamp(12.5px,.92vw,13.5px)] leading-[1.4] text-mut">
        {product.items.map((item) => (
          <li
            key={item}
            className="relative py-[1.5px] pr-0 pl-[15px] before:absolute before:top-2.5 before:left-0 before:h-0.5 before:w-[7px] before:bg-amber before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
