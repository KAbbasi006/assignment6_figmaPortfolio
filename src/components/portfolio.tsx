import Image from "next/image";
const portfolioData = [
    { name: "Todo List App", category: " Command: npx k9_todo_list", imageSrc: "/todo.jpg" },
    { name: "Number Guessing", category: "Command: npx k9_cli_number_guessing_game", imageSrc: "/number_guessing_game.jpg " },
    { name: "Currency Converter", category: "Command: npx k9_cli_currency_conveter_project", imageSrc: "/currency_converter.jpg" },
    { name: "Calculator", category: "Command: npx k6_simple_cli_calculator", imageSrc: "/calculator.jpg" },
    { name: "ATM", category: "Command: npx k6_cli_atm_project", imageSrc: "/atm.jpg" },
    // Add more projects as needed
  ];
  
  const PortfolioSection = () => {
    return (
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Portfolio Title */}
          <h2 id="portfolio" className="text-4xl font-bold text-center mb-8">Portfolio</h2>
  
          {/* Filter Buttons */}
          <div className="flex justify-center mb-8 space-x-4">
             <button className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-6 rounded-md">CLI Projects</button>
        
          </div>
  
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                {/* Project Image */}
                <Image src={project.imageSrc} alt={project.name}   width={500}
  height={300} className="w-full h-50" />
  
                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-md font-medium text-orange-400">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
 
      </section>
    );
  };
  
  export default PortfolioSection;
  