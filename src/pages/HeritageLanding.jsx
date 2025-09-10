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
      className="min-h-screen flex items-center justify-center p-8"
      style={{ background: "linear-gradient(180deg,#dfffee,#e7fff7)" }}
    >
      <div className="w-full max-w-6xl">
        {/* TOP SECTION: left big card + right stacked two cards */}
        <div className="grid grid-cols-3 gap-6 items-start">
          {/* LEFT: Large hero card */}
          <div
            onClick={() => navigate("/explore")}
            className="col-span-2 rounded-3xl p-36 pt-10 shadow-2xl 
                       transition-transform duration-300 hover:scale-105 
                       hover:bg-white/30 backdrop-blur-md cursor-pointer"
            style={{ background: "rgba(255,250,240,0.9)" }}
          >
            <div className="flex gap-6 items-start justify-between">
              <div className="flex w-42 h-42">
                <div
                  className="w-full h-full rounded-xl overflow-hidden"
                  style={{ background: "rgba(246,244,239,0.9)" }}
                >
                  <img
                    src={vidicon}
                    alt="film icon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-serif text-5xl leading-tight font-bold text-gray-900">
                  EXPLORE
                </h1>
                <p className="mt-3 text-xl text-gray-700 max-w-md">
                  A journey through
                  <br />
                  India's timeless
                  <br /> <span className="font-semibold">HERITAGE</span>
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 max-w-lg">
              “Stories that echo wisdom, weaving myths, legends, and memories.”
            </p>
          </div>

          {/* RIGHT COLUMN: two stacked smaller cards */}
          <div className="flex flex-col gap-8">
            {/* Music Card */}
            <div
              onClick={() => navigate("/music")}
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
              <h3 className="mt-4 text-2xl font-serif">MUSIC</h3>
            </div>

            {/* Cuisine Card */}
            <div
              onClick={() => navigate("/cuisine")}
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
              <h3 className="mt-4 text-2xl font-serif">CUISINE</h3>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: three centered cards */}
        <div className="mt-10 flex items-center justify-center gap-16">
          {/* Festival Card */}
          <div
            onClick={() => navigate("/festival")}
            className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-80
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
            <h4 className="mt-4 text-2xl font-serif">FESTIVAL</h4>
          </div>

          {/* Attire Card */}
          <div
            onClick={() => navigate("/attire")}
            className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-80
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
            <h4 className="mt-4 text-2xl font-serif">ATTIRE</h4>
          </div>

          {/* Dance Card */}
          <div
            onClick={() => navigate("/dance")}
            className="rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg w-80
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
            <h4 className="mt-4 text-2xl font-serif">DANCE</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
