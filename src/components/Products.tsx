import Link from "next/link";
import ProductCard from "@/src/components/ProductCard";
import Section, { Container } from "@/src/components/Section";
import { products, productsSection } from "@/src/data/content";

export default function Products() {
  return (
    <Section id={productsSection.id}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div>
            <h2 className="mb-2 font-display text-[clamp(26px,3.4vw,46px)] leading-[1.1] font-medium">
              {productsSection.title}
            </h2>
            <p className="m-0 max-w-[640px] text-[clamp(14.5px,1.2vw,17px)] leading-[1.6] text-mut">
              {productsSection.description}
            </p>
          </div>
          <Link
            href={productsSection.seeAllHref}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2AA8FF] to-blue px-6 text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(14,127,184,.35)]"
          >
            {productsSection.seeAll}
          </Link>
        </div>
        <div className="mt-[clamp(12px,2.2vh,22px)] grid grid-cols-12 gap-3">
          {products.map((product) => (
            <ProductCard key={product.no} product={product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
