import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 ">
      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        
        {/* Left Side - Image */}
        <div className='flex justify-center items-center h-full ' >
            <div className=' bg-gray-900 b rounded-full' ><Image src={'/profile-pic.png'} alt='Profile picture' width={400} height={400} /></div>
        </div>

        {/* Right Side - Content */}
        <div className=" px-2">
          <h2 id="about" className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl mb-6">FrontEnd Developer</p>
          <p className="text-lg leading-relaxed mb-6">
          I am a passionate web developer with a strong foundation in frontend development. I completed my training in frontend development through the BanoQabil 2.0 program, where I gained expertise in HTML, CSS, and JavaScript. Currently, I am advancing my skills by pursuing a course  in "Certified Cloud Applied Generative AI Engineering" from the Governor House.
          </p>
          
          {/* Download CV Button */}
          <a href="/cv.pdf" download className="inline-block bg-orange-500 text-white py-2 px-4 rounded-md text-lg hover:bg-orange-600">
            Download CV
          </a>
        </div>
      </div>

      {/* Skills Section */}
     
    </section>
  );
};

export default AboutSection;
