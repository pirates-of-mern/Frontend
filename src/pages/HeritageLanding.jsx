import React from "react";
import { useNavigate } from "react-router-dom";
import cuisine from "../assets/cuisine.png";
import festicon from "../assets/festicon.png";
import dance from "../assets/dance.png";
import dress from "../assets/dress.jpg";
import music from "../assets/music.png";
import vidicon from "../assets/vidicon.png";

export default function HeritageLanding() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ background: "linear-gradient(180deg,#dfffee,#e7fff7)" }}
    >
      <div className="w-full max-w-6xl">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* LEFT HERO CARD */}
          <div
            onClick={() => navigate("/explore")}
            className="md:col-span-2 rounded-3xl px-6 py-8 md:p-16 shadow-2xl 
                       transition-transform duration-300 hover:scale-105 
                       hover:bg-white/30 backdrop-blur-md cursor-pointer"
            style={{ background: "rgba(255,250,240,0.9)" }}
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={vidicon}
                  alt="film icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  EXPLORE
                </h1>
                <p className="mt-3 text-lg sm:text-xl text-gray-700 max-w-md">
                  A journey through
                  <br />
                  India's timeless <br />
                  <span className="font-semibold">HERITAGE</span>
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 max-w-lg">
              “Stories that echo wisdom, weaving myths, legends, and memories.”
            </p>
          </div>

          {/* RIGHT COLUMN: music + cuisine */}
          <div className="flex flex-col gap-6">
            {[
              { label: "MUSIC", image: music, route: "/music" },
              { label: "CUISINE", image: cuisine, route: "/cuisine" },
            ].map((item) => (
              <div
                key={item.label}
                onClick={() => navigate(item.route)}
                className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg
                           transition-transform duration-300 hover:scale-105 hover:bg-white/30 
                           backdrop-blur-md cursor-pointer"
                style={{ background: "rgba(255,250,240,0.95)" }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-50">
                  <img
                    src={item.image}
                    alt={`${item.label.toLowerCase()} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl sm:text-2xl font-serif">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          {[
            { label: "FESTIVAL", image: festicon, route: "/festival" },
            { label: "ATTIRE", image: dress, route: "/attire" },
            { label: "DANCE", image: dance, route: "/dance" },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => navigate(item.route)}
              className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-full sm:w-72
                         transition-transform duration-300 hover:scale-105 hover:bg-white/30 
                         backdrop-blur-md cursor-pointer"
              style={{ background: "rgba(255,250,240,0.95)" }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt={`${item.label.toLowerCase()} icon`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="mt-4 text-xl sm:text-2xl font-serif">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
