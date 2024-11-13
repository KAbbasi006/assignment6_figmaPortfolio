import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import Image from 'next/image';
interface HeroProps {
  experiences: number,
  projects: number,
  clients: number
}
const Hero: React.FC<HeroProps> = ({ experiences, projects, clients }) => {
  return (
    <section className='grid  grid-cols-1 lg:grid-cols-2  bg-black text-white gap-8 p-8 '>
     
     
      {/* COLUMN 1 */}

      {/* Name and Profession */}
      <div className=' flex flex-col justify-center items-center lg:items-start lg:place-items-center '>
        <div className='flex flex-col justify-center items-center lg:items-start' ><br /><br />
          <p className='text-white'>Hi! I am</p>
          <h1 className='text-3xl font-semibold text-white'>Komal Abbasi</h1>
          <h2 className='text-orange-500 text-5xl font-bold xs:text-4xl '>Web Developer</h2>
        </div><br />
        {/* Social Media Icons */}
        <div className='flex space-x-4 my-6'>
          <a href="https://www.linkedin.com/in/komal-abbasi-2121b7275/" target="_blank" className='border-2 p-4 text-2xl rounded-full' >< BsLinkedin /></a>
          <a href="https://github.com/KAbbasi006" target="_blank" className='border-2 p-4 text-2xl rounded-full' ><FaGithub /></a>
          <a href="https://www.behance.net/KAkomalabbasi" target="_blank" className='border-2 p-4 text-2xl rounded-full' ><FaBehance /></a>
          <a href="https://assignment5-portfolio-website-odq36tdk8-komal-abbasis-projects.vercel.app" target="_blank" className='border-2 p-4 text-2xl rounded-full' ><FaGlobe /></a>
        </div><br />
        {/* Hire me button , Download CV button*/}
        <div>
          <button className=' px-4 my- mr-5 border-2 bg-orange-500 hover:bg-orange-400 py-2 rounded-lg font-semibold '>Hire me</button>
          <button onClick={() => window.open('/Resume.png', '_blank')} className=' px-4 my- mr-5 border-2 hover:bg-orange-400 py-2 rounded-lg font-semibold'>View Resume</button>
        </div><br /><br />
        {/* Experience, Project done, happy clients */}
        <div className='flex space-x-8 mt-6'>
          <div>
            <p className='text-3xl font-bold text-orange-500 '>{experiences}+</p>
            <p>Experiences</p>
          </div>
          <div className='border-l-2 pl-2'>
            <p className='text-3xl font-bold text-orange-500 '>{projects}+ </p>
            <p>Projects Done</p>
          </div>
          <div className='border-l-2 pl-2'>
            <p className='text-3xl font-bold text-orange-500 '>{clients}+  </p>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>



     {/* COLUMN 2 */}

        {/* Right hand side (image) */}
        <div className='flex justify-center items-center h-full' >
            <div className=' bg-gray-900 b rounded-full' ><Image src={'/profile-pic.png'} alt='Profile picture' width={400} height={400} /></div>
        </div>
      
    </section>)
}

export default Hero