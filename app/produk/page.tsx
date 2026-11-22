import type { Metadata } from "next";
import Contact from "@/src/components/Contact";
import Navbar from "@/src/components/Navbar";
import PageMode from "@/src/components/PageMode";
import ProductsCatalog from "@/src/components/ProductsCatalog";
import { productsSection, site } from "@/src/data/content";

export const metadata: Metadata = {
  title: `Produk | ${site.title}`,
  description: productsSection.description,
};

export default function ProdukPage() {
  return (
    <>
      <PageMode mode="page" />
      <Navbar />
      <main>
        <ProductsCatalog />
        <Contact />
      </main>
    </>
  );
}
