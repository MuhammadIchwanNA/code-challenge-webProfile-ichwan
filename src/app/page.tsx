import type { Metadata } from "next";
import "./globals.css"; 
import HeroSection from "./components/HeroSection"; 
import AboutMe from "./components/About";
import SkillsSection from "./components/Skills";
import Portofolio from "./components/Portofolio";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/Contact";

export const metadata: Metadata = {
  title: "Ichwan — Portfolio",
  description:
    "I build beautiful and functional websites that bring ideas to life.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <Portofolio />
      <Experience />
      <Testimonials />
      <ContactSection />
    </>
  );
}
