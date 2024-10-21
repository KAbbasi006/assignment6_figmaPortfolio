import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact me</h2>
        <p className="text-gray-400 text-center mb-8">Feel free to contact me !</p>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <input
            type="text"
            placeholder="First name"
            className="bg-gray-800 p-4 rounded-md w-full border border-gray-600"
          />
           <input
          type="text"
          placeholder=" Last name"
          className="bg-gray-800 p-4 rounded-md w-full border border-gray-600"
        />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-800 p-4 rounded-md w-full border border-gray-600"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-gray-800 p-4 rounded-md w-full border border-gray-600"
          />
        
          <input
            type="text"
            placeholder="Timeline"
            className="bg-gray-800 p-4 rounded-md w-full border border-gray-600 md:col-span-2"
          />
          <textarea
            placeholder="Project Details..."
            className="bg-gray-800 p-4 rounded-md w-full border border-gray-600 md:col-span-2 h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-black font-bold py-3 px-6 rounded-md hover:bg-orange-400 transition md:col-span-2"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
