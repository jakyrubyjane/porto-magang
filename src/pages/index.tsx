import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundStars from "@/components/BackgroundStars";


export default function Home() {
  return (
    <>
          <BackgroundStars />

      <Navbar /> {/* ⛔️ JANGAN dibungkus div */}
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
