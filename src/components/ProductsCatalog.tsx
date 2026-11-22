import Link from "next/link";
import CatalogEquipmentCard from "@/src/components/CatalogEquipmentCard";
import CatalogProductCard from "@/src/components/CatalogProductCard";
import { Container } from "@/src/components/Section";
import {
  equipmentSection,
  products,
  productsSection,
  site,
} from "@/src/data/content";

export default function ProductsCatalog() {
  return (
    <div className="relative z-[1] pt-[104px] pb-16">
      <Container>
        <Link
          href="/#beranda"
          className="inline-block text-sm font-semibold text-blue"
        >
          ← Beranda
        </Link>
        <h1 className="mt-3.5 font-display text-[clamp(30px,4vw,54px)] leading-[1.1] font-medium">
          {productsSection.title}
        </h1>
        <p className="m-0 mt-2 max-w-[640px] text-[clamp(14.5px,1.2vw,17px)] leading-[1.6] text-mut">
          {productsSection.description}
        </p>

        <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4">
          {products.map((product) => (
            <CatalogProductCard key={product.no} product={product} />
          ))}
        </div>

        <h2 className="mt-28 mb-2 font-display text-[clamp(26px,3.4vw,46px)] leading-[1.1] font-medium min-[901px]:mt-36">
          {equipmentSection.title}
        </h2>
        <p className="m-0 max-w-[640px] text-[clamp(14.5px,1.2vw,17px)] leading-[1.6] text-mut">
          {equipmentSection.description}
        </p>
        <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4">
          {equipmentSection.items.map((item) => (
            <CatalogEquipmentCard key={item.code} item={item} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-6 rounded-[20px] border border-line bg-gradient-to-br from-[#DDEEF9] to-white p-[clamp(16px,2vw,28px)] min-[901px]:grid-cols-[.8fr_1.5fr_auto]">
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
    </div>
  );
}
