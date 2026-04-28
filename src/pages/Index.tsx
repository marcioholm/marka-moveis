import Navbar from "@/components/marka/Navbar";
import Hero from "@/components/marka/Hero";
import Categories from "@/components/marka/Categories";
import Projects from "@/components/marka/Projects";
import Process from "@/components/marka/Process";
import Testimonials from "@/components/marka/Testimonials";
import Contact from "@/components/marka/Contact";
import Footer from "@/components/marka/Footer";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
