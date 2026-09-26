import Hero from "@/src/components/Hero";
import Navbar from "@/src/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}
