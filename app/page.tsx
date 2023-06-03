import Image from "next/image";
import Greetings from "./components/Greetings";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import { preferredTranslations } from "@/translations";

export default function Home({
  searchParams,
}: {
  searchParams?: { language?: string };
}) {
  const i18n = preferredTranslations(searchParams?.language || null);
  return (
    <>
      <Navigation languageSwitcher={i18n.languageSwitcher} />
      <Greetings />
      <AboutMe />
      <Skills />
      <Projects />
      <Career career={i18n.career} />
      <Contact />
    </>
  );
}
