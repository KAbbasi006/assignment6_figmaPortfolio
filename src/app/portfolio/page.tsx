import Image from "next/image";
import Link from "next/link";
const portfolioData = [
  { name: "Todo List App", category: " Command: npx k9_todo_list", imageSrc: "/todo.jpg" },
  { name: "Number Guessing", category: "Command: npx k9_cli_number_guessing_game", imageSrc: "/number_guessing_game.jpg" },
  { name: "Currency Converter", category: "Command: npx k9_cli_currency_conveter_project", imageSrc: "/currency_converter.jpg" },
  { name: "Calculator", category: "Command: npx k6_simple_cli_calculator", imageSrc: "/calculator.jpg" },
  { name: "ATM", category: "Command: npx k6_cli_atm_project", imageSrc: "/atm.jpg" },
  
  // Add more projects as needed
];
const portfolioData2 = [
  { name: "Modern Furnishings", category: "https://modern-furnishing-custom-css.vercel.app/", imageSrc: "/modernFurnishings.png" },
  { name: "World Plate Restaurant", category: "https://world-plate-restaurant.netlify.app/", imageSrc: "/worldPlate.png" },
  { name: "Mini Portfolio Website", category: "https://assignment5-portfolio-website.vercel.app/", imageSrc: "/portfolio.png" },
  { name: "Resume Builder App", category: "https://milestone4and5-editable-resume.vercel.app/", imageSrc: "/CV.png" }
]
const PortfolioSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Portfolio Title */}
        <h2 id="portfolio" className="text-4xl font-bold text-center mb-8">Portfolio</h2>

        {/* CLI Projects Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          <button className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-6 rounded-md">
            CLI Projects
          </button>
        </div>
        <div className="flex justify-center mb-8 space-x-4">
          <p>Check out these mini CLI Projects by running these commands on your Command Prompt.</p>
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <div key={index} className="bg-gray-800 border border-gray-600 p-3 rounded-lg overflow-hidden shadow-lg">
              {/* Project Image */}
              <Image src={project.imageSrc} alt={project.name} width={500}
                height={350} className="w-full h-50" />
              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-md font-medium text-orange-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

          <br /><br /><br /><br />
        {/* Mini Website Projects Buttons */}
        <div className="flex justify-center mb-8 space-x-4 ">
          <button className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-6 rounded-md">
            Mini Website Projects
          </button>
        </div>
        <div className="flex justify-center mb-8 space-x-4">
          <p>Check out these mini Website Projects by clicking on  their live Demo link! </p>
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {portfolioData2.map((project, index) => (
            <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden p-3 shadow-lg">
              {/* Project Image */}
              <Image src={project.imageSrc} alt={project.name} width={500}
                height={350} className="w-full h-64 border border-gray-600" />
              {/* Project Info */}
              <br />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-md font-medium text-orange-400"><span className="text-white">Live Demo: </span>  <Link href={`${project.category}`} target="_blank" rel="noopener noreferrer"> Click here tou view Website</Link></p>
              </div>
            </div>
          ))}
        </div>



      </div>

    </section>
  );
};

export default PortfolioSection;
