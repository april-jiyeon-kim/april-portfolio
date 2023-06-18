import Image from "next/image";
import Greetings from "./components/Greetings";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

export default function Home({}: {}) {
  return (
    <>
      <Navigation />
      <Greetings />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
      <Contact />
    </>
  );
}
