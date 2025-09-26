import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { models } from "./modelsData";
import ModelViewer from "./ModelViewer";

const ModelPage = () => {
  const { modelName } = useParams();
  const navigate = useNavigate();

  const currentIndex = models.findIndex((m) => m.slug === modelName);
  if (currentIndex === -1) {
    return <Navigate to="/3dmodel" />;
  }

  const model = models[currentIndex];

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % models.length;
    navigate(`/3dmodel/${models[nextIndex].slug}`);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + models.length) % models.length;
    navigate(`/3dmodel/${models[prevIndex].slug}`);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6 flex flex-col items-center relative">
      <h1 className="text-3xl font-bold mb-6">{model.name}</h1>

      <ModelViewer src={model.src} alt={model.name} />

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        aria-label="Previous Model"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3 shadow-lg transition"
        style={{ userSelect: "none" }}
      >
        {/* Left arrow icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        aria-label="Next Model"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3 shadow-lg transition"
        style={{ userSelect: "none" }}
      >
        {/* Right arrow icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ModelPage;
