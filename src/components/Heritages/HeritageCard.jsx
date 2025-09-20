import React, { useState } from "react";
import { truncate } from "../../utils/textUtils";
import { Pencil, Users, Ticket, Clock, XCircle, Globe } from "lucide-react";

const HeritageCard = ({ heritage, isAdmin, onEditClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative border border-green-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col bg-gradient-to-br from-green-50 to-green-100 group hover:-translate-y-1">
      {/* Image with overlay */}
      <div className="relative w-full h-56 overflow-hidden">
        {heritage.images?.length > 0 ? (
          <>
            <img
              src={heritage.images[0]}
              alt={heritage.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow-lg backdrop-blur-md px-3 py-1 rounded-lg bg-green-600/70">
              {heritage.name}
            </h3>
          </>
        ) : (
          <div className="w-full h-full bg-green-200 flex items-center justify-center text-green-700 text-sm">
            No Image Available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Location */}
        <p className="text-sm text-green-700 mb-3 flex items-center gap-1">
          📍 {heritage.location.city}, {heritage.location.state},{" "}
          {heritage.location.country}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {heritage.category}
          </span>
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {heritage.heritage_type || "N/A"}
          </span>
          {heritage.unesco_status && (
            <span className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
              <Globe size={14} /> UNESCO
            </span>
          )}
        </div>

        {/* Built info */}
        {heritage.build_year && (
          <p className="text-sm text-gray-700 mb-2">
            🏛️ <span className="font-medium">Built:</span> {heritage.build_year}{" "}
            {heritage.build_by && (
              <span className="italic">by {heritage.build_by}</span>
            )}
          </p>
        )}

        {/* Tags */}
        {heritage.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {heritage.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-green-50 text-green-800 px-2 py-0.5 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Description with toggle */}
        <p className="text-gray-700 text-sm mb-3 leading-relaxed">
          {expanded
            ? heritage.description
            : truncate(heritage.description, 120)}
        </p>
        {heritage.description?.length > 120 && (
          <button
            className="text-green-600 text-xs font-semibold hover:underline mb-3"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}

        {/* Extra Info */}
        <div className="mt-auto space-y-2 text-sm text-gray-700">
          {heritage.extra_info?.visitors_per_year > 0 && (
            <p className="flex items-center gap-2">
              <Users size={16} className="text-green-600" />{" "}
              {heritage.extra_info.visitors_per_year.toLocaleString()}{" "}
              visitors/year
            </p>
          )}
          {(heritage.extra_info?.entry_fee?.indian ||
            heritage.extra_info?.entry_fee?.foreigner) && (
            <p className="flex items-center gap-2">
              <Ticket size={16} className="text-green-500" /> ₹
              {heritage.extra_info.entry_fee.indian} / $
              {heritage.extra_info.entry_fee.foreigner}
            </p>
          )}
          {heritage.extra_info?.timings && (
            <p className="flex items-center gap-2">
              <Clock size={16} className="text-green-600" />{" "}
              {heritage.extra_info.timings}
            </p>
          )}
          {heritage.extra_info?.closed_on && (
            <p className="flex items-center gap-2">
              <XCircle size={16} className="text-red-500" />{" "}
              {heritage.extra_info.closed_on}
            </p>
          )}
        </div>
      </div>

      {/* Floating Edit Button */}
      {isAdmin && (
        <button
          className="absolute top-3 right-3 flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-md transition"
          onClick={() => onEditClick(heritage)}
        >
          <Pencil size={18} />
        </button>
      )}
    </div>
  );
};

export default HeritageCard;
