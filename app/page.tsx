import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import About from "./src/components/About";
import Benefits from "./src/components/Benefits";
import Host from "./src/components/Host";
import Testimonials from "./src/components/Testimonials";
import Faq from "./src/components/Faq";
import Footer from "./src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Host />
      <Testimonials />
      <Faq />
      <Footer/>
    </main>
  );
}