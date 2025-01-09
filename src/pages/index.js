import About from "@/Components/About";
import ContactMe from "@/Components/ContactMe";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import SkillsPage from "@/Components/SkillsPage";
import Work from "@/Components/Work";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto">
      <Header />
      <Hero />
      <About />
      <SkillsPage />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
