import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import WhyChoose from "@/components/WhyChoose";
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
        <CTA />
        <About />
      </main>
      <Footer />
    </>
  );
}
