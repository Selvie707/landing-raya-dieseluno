import About from "@/src/components/About";
import Brands from "@/src/components/Brands";
import Contact from "@/src/components/Contact";
import Equipment from "@/src/components/Equipment";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Products from "@/src/components/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <Products />
        <Brands />
        <Equipment />
        <About />
      </main>
      <Contact />
    </>
  );
}
