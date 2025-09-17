import React from "react";
import { Play } from "lucide-react";

const VideoCard = ({ video, rotated }) => {
  return (
    <div
      className={`relative h-[300px] md:h-[350px] w-full md:w-52 rounded-3xl overflow-hidden
                  border border-green-200/50 backdrop-blur-sm shadow-lg
                  transform transition duration-500 hover:scale-110 hover:rotate-0 hover:shadow-2xl
                  group ${rotated}`}
    >
      {/* Video (clear by default, blur only on hover) */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover transition-all duration-700 
                   group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-125 
                   group-hover:blur-[2px]" // 👈 blur applies only on hover
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

      {/* Glass Overlay with Strong Blur (shows only on hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg text-center">
          <a
            href="#"
            className="flex items-center gap-2 text-white font-semibold text-lg tracking-wide hover:underline"
          >
            <Play size={20} className="text-green-400" /> Read More →
          </a>
        </div>
      </div>

      {/* Neon Border Glow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-[0_0_25px_#22c55e] transition-all duration-500"></div>
    </div>
  );
};

export default VideoCard;
