import React from "react";
import { Link } from "react-router-dom";
import { models } from "./modelsData";

const ModelsGallery = () => {
  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        3D Monuments Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
        {models.map((model) => (
          <Link
            key={model.id}
            to={`/3dmodel/${model.slug}`}
            className="cursor-pointer rounded-lg overflow-hidden border-4 border-transparent hover:border-cyan-400 transition"
            title={model.name}
          >
            <img
              src={model.thumbnail}
              alt={model.name}
              className="object-cover w-full h-40 hover:scale-105 transition-transform"
              loading="lazy"
            />
            <p className="text-center mt-2 font-semibold">{model.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModelsGallery;
