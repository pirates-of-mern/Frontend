import React from "react";

const HeritageCard = ({ site }) => {
  const gradient = "linear-gradient(180deg,#dfffee,#e7fff7)"; // single gradient

  return (
    <div
      className="rounded-2xl shadow-lg p-4 sm:p-6 mb-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
      style={{ background: gradient }}
    >
      <div
        className="relative overflow-hidden rounded-xl"
        style={{ height: "200px", marginBottom: "1rem" }}
      >
        <img
          src={site.images?.[0] || ""}
          alt={site.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {site.category && (
          <span
            className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full shadow-md"
            style={{ background: "rgba(0,0,0,0.6)", color: "white" }}
          >
            {site.category}
          </span>
        )}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 font-serif">
        {site.name}
      </h2>

      <p className="text-gray-700 text-sm mb-2">
        📍 {site.location.city}, {site.location.state}, {site.location.country}
      </p>

      <p className="text-gray-800 text-sm mb-1">
        <strong>Heritage Type:</strong> {site.heritage_type || "N/A"}
      </p>
      <p className="text-gray-800 text-sm mb-1">
        <strong>Built By:</strong> {site.build_by || "Unknown"} (
        {site.build_year || "Unknown"})
      </p>
      <p className="text-gray-800 text-sm mb-1">
        <strong>UNESCO:</strong> {site.unesco_status ? "Yes" : "No"}
      </p>
      <p className="text-gray-700 text-sm mb-1">
        {site.description?.substring(0, 150)}...
      </p>
      <p className="text-gray-800 text-sm mb-1">
        <strong>Visitors/Year:</strong>{" "}
        {site.extra_info?.visitors_per_year || 0}
      </p>
      <p className="text-gray-800 text-sm mb-1">
        <strong>Entry Fee (Indian):</strong> ₹
        {site.extra_info?.entry_fee?.indian || 0}
      </p>
      <p className="text-gray-800 text-sm mb-1">
        <strong>Entry Fee (Foreigner):</strong> ₹
        {site.extra_info?.entry_fee?.foreigner || 0}
      </p>
      <p className="text-gray-800 text-sm mb-1">
        <strong>Timings:</strong> {site.extra_info?.timings || "-"}
      </p>
      <p className="text-gray-800 text-sm mb-1">
        <strong>Closed On:</strong> {site.extra_info?.closed_on || "-"}
      </p>

      {site.videos?.length > 0 && (
        <div className="mt-2">
          {site.videos.map((v, i) => (
            <a
              key={i}
              href={v}
              target="_blank"
              className="text-green-700 text-xs block mb-1 hover:underline"
            >
              Video {i + 1}
            </a>
          ))}
        </div>
      )}

      <div className="mt-3 flex gap-3">
        <button
          onClick={() => alert(`AR view for ${site.name}`)}
          className="flex-1 py-2 bg-green-600 text-white rounded-md font-semibold text-sm hover:bg-green-700 transition"
        >
          View in AR
        </button>
        <button
          onClick={() => alert(`VR tour for ${site.name}`)}
          className="flex-1 py-2 bg-blue-600 text-white rounded-md font-semibold text-sm hover:bg-blue-700 transition"
        >
          View in VR
        </button>
      </div>
    </div>
  );
};

export default HeritageCard;
