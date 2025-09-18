import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import cuisine from "../assets/cuisine.png";
import festicon from "../assets/festicon.png";
import dance from "../assets/dance.png";
import dress from "../assets/dress.jpg";
import music from "../assets/music.png";
import vidicon from "../assets/vidicon.png";
import sites from "../assets/sites.png";

export default function HeritageLanding() {
  const navigate = useNavigate();
  const { stateName } = useParams(); // 👈 dynamic param

  const displayName = stateName ? decodeURIComponent(stateName) : "india";

  return (
    <div
      className="mt-16 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ background: "linear-gradient(180deg,#dfffee,#e7fff7)" }}
    >
      <div className="w-full max-w-6xl flex flex-col gap-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* LEFT: Hero Card */}
          <div
            onClick={() => navigate("/explore/" + (stateName || ""))}
            className="md:col-span-2 rounded-3xl p-8 md:p-16 shadow-2xl 
                       transition-transform duration-300 hover:scale-105 
                       hover:bg-white/30 backdrop-blur-md cursor-pointer"
            style={{ background: "rgba(255,250,240,0.9)" }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={vidicon}
                  alt="film icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900">
                  EXPLORE {displayName}
                </h1>
                <p className="mt-3 text-lg md:text-xl text-gray-700">
                  A journey through
                  <br />
                  {displayName}'s timeless <br />
                  <span className="font-semibold">HERITAGE</span>
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm md:text-base text-gray-600">
              “Stories that echo wisdom, weaving myths, legends, and memories.”
            </p>
          </div>

          {/* RIGHT COLUMN: stacked two cards */}
          <div className="flex flex-col gap-6">
            {/* Music Card */}
            <div
              onClick={() => navigate(`/explore/${displayName}/music`)}
              className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg
                         transition-transform duration-300 hover:scale-105 hover:bg-white/30 
                         backdrop-blur-md cursor-pointer"
              style={{ background: "rgba(255,250,240,0.95)" }}
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={music}
                  alt="music icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl md:text-2xl font-serif">MUSIC</h3>
            </div>

            {/* Cuisine Card */}
            <div
              onClick={() => navigate(`/explore/${displayName}/cuisine`)}
              className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg
                         transition-transform duration-300 hover:scale-105 hover:bg-white/30 
                         backdrop-blur-md cursor-pointer"
              style={{ background: "rgba(255,250,240,0.95)" }}
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={cuisine}
                  alt="cuisine icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl md:text-2xl font-serif">CUISINE</h3>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center">
          {/* Festival Card */}
          <div
            onClick={() => navigate(`/explore/${displayName}/festivals`)}
            className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-full sm:w-72
                       transition-transform duration-300 hover:scale-105 hover:bg-white/30 
                       backdrop-blur-md cursor-pointer"
            style={{ background: "rgba(255,250,240,0.95)" }}
          >
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={festicon}
                alt="festival icon"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="mt-4 text-xl md:text-2xl font-serif">FESTIVAL</h4>
          </div>

          {/* Attire Card */}
          <div
            onClick={() => navigate(`/explore/${displayName}/attire`)}
            className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-full sm:w-72
                       transition-transform duration-300 hover:scale-105 hover:bg-white/30 
                       backdrop-blur-md cursor-pointer"
            style={{ background: "rgba(255,250,240,0.95)" }}
          >
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={dress}
                alt="attire icon"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="mt-4 text-xl md:text-2xl font-serif">ATTIRE</h4>
          </div>

          {/* Dance Card */}
          <div
            onClick={() => navigate(`/explore/${displayName}/dance`)}
            className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-full sm:w-72
                       transition-transform duration-300 hover:scale-105 hover:bg-white/30 
                       backdrop-blur-md cursor-pointer"
            style={{ background: "rgba(255,250,240,0.95)" }}
          >
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={dance}
                alt="dance icon"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="mt-4 text-xl md:text-2xl font-serif">DANCE</h4>
          </div>

          {/* Sites Card */}
          <div
            onClick={() => navigate(`/explore/${displayName}/sites`)}
            className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-full sm:w-72
                       transition-transform duration-300 hover:scale-105 hover:bg-white/30 
                       backdrop-blur-md cursor-pointer"
            style={{ background: "rgba(255,250,240,0.95)" }}
          >
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={sites}
                alt="sites icon"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="mt-4 text-xl md:text-2xl font-serif">SITES</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
