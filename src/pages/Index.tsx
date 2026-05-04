import Navbar from "@/components/marka/Navbar";
import Hero from "@/components/marka/Hero";
import Highlights from "@/components/marka/Highlights";
import Categories from "@/components/marka/Categories";
import Visit from "@/components/marka/Visit";
import Footer from "@/components/marka/Footer";
import FloatingWhatsApp from "@/components/marka/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Categories />
        <Visit />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
