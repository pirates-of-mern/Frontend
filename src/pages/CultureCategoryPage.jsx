import React from "react";
import { useParams } from "react-router-dom";
import stateCultureData from "../data/stateCultureData";

const CultureCategoryPage = () => {
  const { stateName, category } = useParams();
  // stateName can be "uttar-pradesh" OR "india"

  let data = [];

  if (stateName === "india") {
    // ✅ Merge all states data for that category
    Object.entries(stateCultureData).forEach(([state, categories]) => {
      if (categories[category]) {
        data = [
          ...data,
          ...categories[category].map((item) => ({ ...item, state })),
        ];
      }
    });
  } else {
    data = stateCultureData[stateName]?.[category] || [];
  }

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 px-8 py-12">
      <h1 className="text-3xl font-bold text-center text-yellow-900 mb-10 capitalize">
        {stateName.replace("-", " ")} – {category}
      </h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          🚧 No {category} data available yet for this selection.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                {item.city && (
                  <p className="text-sm text-gray-600 mb-2">{item.city}</p>
                )}
                <p className="text-gray-700">{item.description}</p>
                {item.state && (
                  <p className="mt-2 text-xs text-gray-500">
                    🌍 {item.state.replace("-", " ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CultureCategoryPage;
