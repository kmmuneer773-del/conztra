import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          image="/banners/equipment-hero.jpg"
          title="Products & Services"
          subtitle="Explore our three specialised divisions — professional uniforms, building materials and equipment rental — straight from the catalogues."
          fullHeight
          scrollHint
        />
        <Products />
      </main>
      <Footer />
    </>
  );
}
