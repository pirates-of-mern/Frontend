import React from "react";

const StartButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-44 px-6 py-3 text-3xl font-semibold text-white rounded-full overflow-hidden
                 shadow-[0_8px_0_#166534,0_12px_25px_rgba(0,0,0,0.25)]
                 bg-gradient-to-r from-green-400 via-green-500 to-green-600
                 transform transition-all duration-300 hover:-translate-y-2 hover:translate-x-1
                 hover:shadow-[0_12px_0_#14532d,0_20px_40px_rgba(0,0,0,0.45)]
                 active:translate-y-1 active:shadow-[0_4px_0_#14532d,0_8px_15px_rgba(0,0,0,0.35)]
                 group perspective-1000"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                       -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
      />
      <span className="absolute -inset-2 rounded-full blur-2xl bg-green-500 opacity-20 group-hover:opacity-40" />
      <span className="relative z-10 drop-shadow-lg tracking-wide">Start</span>
    </button>
  );
};

export default StartButton;
