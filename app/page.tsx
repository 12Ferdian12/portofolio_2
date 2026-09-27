import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Project from "@/src/components/Project";
import Skill from "@/src/components/Skill";
import Contact from "@/src/components/Contact";
import Navbar from "@/src/layout/navbar";
import Footer from "@/src/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
