import React from "react";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white px-8 py-16 font-sans">

      {/* Header */}
      <header className="flex justify-between items-center mb-20">
        <h1 className="text-3xl font-bold text-white">
          HoloConnect <span className="text-gray-400 text-sm">Pvt Ltd</span>
        </h1>
        <nav className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#technology" className="hover:text-white">Technology</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-left">

        {/* Text Block */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-5xl font-extrabold mb-6 leading-snug tracking-tight">
            Redefining Human Interaction through <br /> 3D Holography & AI
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            We’re building the future of immersive communication—blending AI, holography, and intuitive design.
          </p>
          <div className="flex space-x-6">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xl transition">Explore Vision</button>
            <button className="px-6 py-3 bg-transparent border border-gray-500 hover:border-white rounded-lg transition">Contact Us</button>
          </div>
        </div>

        {/* Image Block */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/assets/image copy.png"
            alt="Holographic Ring"
            className="w-[400px] h-auto animate-pulse-ring drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © 2025 HoloConnect Pvt Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;