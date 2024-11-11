'use client'
import Hero from "@/components/hero";

export default function Home() {
  const experiences = 0;
  const projects = 0;
  const clients  = 0;
 
  return (
    <div>
    
      {/* Hero section */}
      <Hero experiences={experiences} projects={projects} clients={clients}/>
    </div>
  );
}
