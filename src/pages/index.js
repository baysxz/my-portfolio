import About from "@/Components/About";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import SkillsPage from "@/Components/SkillsPage";

export default function Home() {
  return (
    <div className='container max-w-7xl mx-auto'>
      <Header />
      <Hero />
      <About />
      <SkillsPage />
    </div>
  );
}
