import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.webp";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const images = [img1, img2, img3, hero1, hero2, hero3]; // 6 images

const LandingPage = () => {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => setRotation((prev) => prev + 60);
  const rotateRight = () => setRotation((prev) => prev - 60);

  return (
    <main className="pt-16 md:pt-24 px-4 md:px-8 pb-12 md:pb-16 bg-gradient-to-br from-green-100 to-green-150 min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row gap-14 md:gap-8 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-700 leading-snug transition-transform duration-300 hover:scale-105 hover:text-green-800">
            BHARAT <br /> SANSKRITI <br /> ATLAS ...
          </h1>

          <button className="mx-auto md:mx-0 w-28 sm:w-32 md:w-36 px-5 py-2 text-2xl sm:text-3xl md:text-4xl bg-green-500 text-white font-medium rounded-full shadow-lg transition duration-300 hover:bg-green-600 hover:shadow-green-400/70 hover:scale-110 hover:-translate-y-1">
            Start
          </button>

          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 transition duration-300 hover:scale-105 hover:text-green-600">
            Mapping India’s <br /> Timeless Traditions
          </p>
        </div>

        {/* Right Side - 3D Rotating Glass Carousel */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div
            className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px]"
            style={{ perspective: "1200px" }}
          >
            <div
              className="absolute inset-0 transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              {images.map((image, index) => {
                const angle = (360 / images.length) * index;

                // Mobile vs Desktop translateZ
                const translateZ = window.innerWidth < 640 ? 180 : 350;

                return (
                  <div
                    key={index}
                    className="absolute w-24 h-36 sm:w-36 sm:h-52 md:w-44 md:h-60 lg:w-52 lg:h-72 rounded-3xl shadow-xl border border-green-200 overflow-hidden backdrop-blur-md"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                    }}
                  >
                    <img
                      src={image}
                      alt={`Card ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={rotateLeft}
            className="absolute left-2 sm:left-4 md:-left-10 bg-white/70 p-2 sm:p-3 rounded-full shadow-lg hover:bg-green-100 transition"
          >
            <ChevronLeft size={24} className="text-green-700" />
          </button>
          <button
            onClick={rotateRight}
            className="absolute right-2 sm:right-4 md:-right-10 bg-white/70 p-2 sm:p-3 rounded-full shadow-lg hover:bg-green-100 transition"
          >
            <ChevronRight size={24} className="text-green-700" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
