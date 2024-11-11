import { FaHtml5, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import React from 'react'

const skillsData = [
    {icon: <FaHtml5 className="text-orange-600 text-6xl" />,title: 'HTML',percentage: 95},
    {icon: <FaCss3Alt className=" text-blue-600 text-6xl" />,title: 'CSS',percentage: 85},
    {icon: <FaJsSquare className=" text-yellow-500  text-6xl" />,title: 'JAVASCRIPT',percentage: 80},
    {icon: <SiTypescript className=" text-blue-500  text-6xl"/>,title: 'TYPESCRIPT',percentage: 80},
    {icon: <SiTailwindcss className=" text-teal-400  text-6xl"/>,title: 'TAILWIND CSS',percentage: 85},
    {icon: <SiNextdotjs className="  text-white text-6xl"/>,title: 'NEXT.JS',percentage: 30,note: '(Currently learning)'}]
const Skills = () => {
    return (
        <div className="bg-black text-white py-16">
            <div className="text-center">
                <h1 id="skills" className=" text-4xl font-bold my-8 pb-6">Skills</h1>
            </div>
            <div className="flex justify-center mb-8 space-x-4">
          <p className="px-28">With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life with clean, efficient code and an eye for responsive layouts. Skilled in Tailwind CSS for rapid styling and TypeScript for added code reliability, I’m currently expanding my expertise in Next.js to build dynamic, high-performance web applications.</p>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {skillsData.map((skill, index) => (
                <div key={index} className=" bg-gray-900 rounded-lg p-12 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">{skill.icon}</div>
                    {/*Skill Title */}
                    <h1 className="text-xl font-semibold">{skill.title} </h1>
                    {/* Skill Progress */}
                    <div className=" relative mt-4 h-4 w-full bg-gray-700  rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full" style={{width:`${skill.percentage}%`}}></div>
                    </div>
                    {/* Percentage */}
                    <p className="mt-2 text-sm">{skill.percentage}%</p>
                    {/* Optional Note */}
                    {skill.note && <p className="text-xs text-gray-400 mt-2">{skill.note}</p>}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Skills;