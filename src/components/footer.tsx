import { FaLinkedin, FaGithub,FaGlobe, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-xl font-bold mb-4 text-orange-500">Komal Abbasi</h2>
        
        <ul className="flex justify-center space-x-8 mb-6">
          <li><a href="#">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#"><FaLinkedin className="text-2xl"/></a>
          <a href="#"><FaGithub className="text-2xl"/></a>
          <a href="#"><FaBehance className="text-2xl"/></a>
          <a href="#"><FaGlobe className="text-2xl"/></a>
        </div>
        
        <div className="flex justify-center space-x-4 mb-4 text-gray-400">
          <p>abcdefghij@gmail.com</p>
          <p>021 123456789</p>
        </div>

        <p className="text-gray-600">Designed by Komal Abbasi</p>
      </div>
    </footer>
  );
};

export default Footer;
