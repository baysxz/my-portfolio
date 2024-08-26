// import { Skill } from "@/Components/Skill";
// import { JavascriptIcon } from "../Components/icons/JavascriptIcons";

import Header from "@/Components/Header";
import Hero from "../Components/Hero";
import About from "@/Components/About";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
