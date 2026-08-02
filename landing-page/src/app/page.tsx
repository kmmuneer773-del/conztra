import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import WhyChoose from "@/components/WhyChoose";
import Downloads from "@/components/Downloads";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divisions />
        <WhyChoose />
        <Downloads />
        <CTA />
        <About />
      </main>
      <Footer />
    </>
  );
}
