import Navbar from "@/components/marka/Navbar";
import Hero from "@/components/marka/Hero";
import Categories from "@/components/marka/Categories";
import Visit from "@/components/marka/Visit";
import Footer from "@/components/marka/Footer";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
