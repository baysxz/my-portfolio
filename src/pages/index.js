import About from "@/Components/About";
import { Experience } from "@/Components/Experience";
import Header from "@/Components/Header";
import SkillsPage from "@/Components/SkillsPage";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto">
      <Header />
      <About />
      <SkillsPage />
      <Experience />
    </div>
  );
}
