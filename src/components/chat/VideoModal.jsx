import React from "react";

const VideoModal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-lg w-full max-w-4xl aspect-video overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-2 hover:bg-opacity-80 transition"
        >
          ✕
        </button>

        <iframe
          src={videoUrl}
          title="Embedded Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
