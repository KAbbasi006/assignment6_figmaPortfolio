'use client'
import AboutSection from "@/components/about";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PortfolioSection from "@/components/portfolio";
import Skills from "@/components/skills";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Home() {
  const experiences = 0;
  const projects = 5;
  const clients  = 0;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu=()=>{
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Header */}
      <header className="bg-black p-6 text-white  flex justify-between items-center px-10 ">
        <div className="text-2xl font-bold text-orange-500">Komal Abbasi</div>
        <nav className="hidden md:block" >
          <ul className="flex space-x-6">
            <li><a href="#hero">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
        <button className=" bg-orange-500 py-2 px-4 rounded text-black">Hire me</button>
        <div className="md:hidden">
          <button onClick={toggleMenu}><IoMenu /></button>
        </div>
      </header>
      {isOpen && (
        <nav className="md:hidden md:order-1 bg-black text-white p-4">
          <ul className="flex flex-col space-y-4">
            <li><a href="#hero">Home</a></li>
            <li><a href="#skills"></a>Skills</li>
            <li><a href="#about"></a>About</li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      )}
      {/* Hero section */}
      <Hero experiences={experiences} projects={projects} clients={clients}/>

      {/* Skills Section  */}
      <Skills/>
      
      {/* About Section  */}
      <AboutSection/>

      {/* Portfolio Section  */}
      <PortfolioSection/>

      {/* Contact  */}
      <ContactForm/>

      {/* Footer  */}
      <Footer/>
    </div>
  );
}
