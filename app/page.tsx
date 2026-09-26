import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Project from "@/src/components/Project";
import Skill from "@/src/components/Skill";
import Navbar from "@/src/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Skill />
      </main>
    </>
  );
}
