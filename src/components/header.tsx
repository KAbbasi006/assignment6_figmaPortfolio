'use client'
import { useState } from "react";
import React from 'react'
import { IoMenu } from "react-icons/io5";
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu=()=>{
      setIsOpen(!isOpen);
    };
  return (
    <div>
              {/* Header */}
      <header className="bg-black p-6 text-white  flex justify-between items-center px-10 xs:px-6">
        <div className="text-2xl font-bold text-orange-500">Komal Abbasi</div>
        <nav className="hidden md:block" >
          <ul className="flex space-x-6">
            <li><a href="/">Home</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact me</a></li>
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
            <li><a href="/">Home</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact me</a></li>
          </ul>
        </nav>
      )}

    </div>
  )
}

export default Header