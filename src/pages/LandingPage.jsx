import React from "react";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import ProfileCard from "../cards/ProfileCard.jsx";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/explore"); // redirect
  };
  return (
    <main className="pt-24 px-8 pb-16 bg-gradient-to-br from-green-100 to-green-150 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h1 className="text-7xl font-bold text-green-700 leading-snug transition-transform duration-300 hover:scale-105 hover:text-green-800">
            BHARAT <br /> SANSKRITI <br /> ATLAS ...
          </h1>

          <button
          onClick={handleStartClick}
          className="w-36 px-5 py-2 text-4xl bg-green-500 text-white font-medium rounded-full shadow-lg transition duration-300 hover:bg-green-600 hover:shadow-green-400/70 hover:scale-110 hover:-translate-y-1">
            Start
          </button>

          <p className="text-4xl font-lg text-gray-700 transition duration-300 hover:scale-105 hover:text-green-600">
            Mapping India’s <br /> Timeless Traditions
          </p>
        </div>

        {/* Right Side - Stylish Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full md:w-1/2 justify-center">
          {[vid1, vid2, vid3].map((video, index) => (
            <div
              key={index}
              className={`relative h-[300px] md:h-[350px] w-full md:w-52 rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-110 hover:rotate-0 hover:shadow-2xl border border-green-200 backdrop-blur-sm ${
                index % 2 === 0 ? "-rotate-3" : "rotate-3"
              } group`}
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="text-white font-semibold text-lg underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProfileCard className="mt-16 mx-auto" />
      <ProfileCard className="mt-16 mx-auto" />
      <ProfileCard className="mt-16 mx-auto" />
      <ProfileCard className="mt-16 mx-auto" />
    </main>
  );
};

export default LandingPage;





{/* <ProfileCard className="mt-16 mx-auto" /> */}
