import React from "react";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.webp";

const LandingPage = () => {
  return (
    <main className="pt-24 px-8 pb-16 bg-gradient-to-br from-green-100 to-green-150 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h1 className="text-7xl font-bold text-green-700 leading-snug transition-transform duration-300 hover:scale-105 hover:text-green-800">
            BHARAT <br /> SANSKRITI <br /> ATLAS ...
          </h1>

          <button className="w-36 px-5 py-2 text-4xl bg-green-500 text-white font-medium rounded-full shadow-lg transition duration-300 hover:bg-green-600 hover:shadow-green-400/70 hover:scale-110 hover:-translate-y-1">
            Start
          </button>

          <p className="text-4xl font-lg text-gray-700 transition duration-300 hover:scale-105 hover:text-green-600">
            Mapping India’s <br /> Timeless Traditions
          </p>
        </div>

        {/* Right Side - Stylish Image Cards */}
        <div className="flex gap-6 w-full md:w-1/2 justify-center">
          {[img1, img2, img3].map((image, index) => (
            <div
              key={index}
              className={`relative h-[300px] md:h-[350px] w-44 md:w-52 rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-110 hover:rotate-0 hover:shadow-2xl border border-green-200 backdrop-blur-sm ${
                index % 2 === 0 ? "-rotate-3" : "rotate-3"
              }`}
            >
              <img
                src={image}
                alt={`Indian Heritage ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
