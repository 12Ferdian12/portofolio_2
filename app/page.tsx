import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Navbar from "@/src/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
