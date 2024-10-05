import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Featured from './components/Featured';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import TeamData from './components/TeamData';
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="relative w-full bg-zinc-900 text-[#FAF7F0]">
      <Navbar />
      
      {/* LandingPage with sticky behavior */}
      <section className=" h-screen sticky top-0">
        <LandingPage scrollYProgress={scrollYProgress} />
      </section>

      {/* Marquee with no rotation */}
      <section className=" h-screen sticky top-0">
        <Marquee />
      </section>

      {/* Other sections */}
      <section className=" h-screen sticky top-0">
        <About />
      </section>

      {/* Featured section taking full width */}
      <section className=" h-screen sticky top-0">
        <Featured />
      </section>

      <section className=" h-screen sticky top-0">
        <TeamData />
      </section>
      <section className=" h-screen sticky top-0">
        <Contact />
      </section>
      <section className=" h-screen sticky top-0">
      <Footer  scrollYProgress={scrollYProgress}/>
      </section>
    </div>
  );
}

export default App;
