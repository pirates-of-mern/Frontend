import React from "react";

const CategorySection = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Category & Type</h3>
      <div className="grid grid-cols-2 gap-3">
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          {[
            "Heritage",
            "Monument",
            "Temple",
            "Cave",
            "Fort",
            "Religious",
            "Palace",
            "Museum",
            "Other",
          ].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          name="heritage_type"
          value={formData.heritage_type}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          {["Cultural", "Natural", "Mixed"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* UNESCO Checkbox */}
      <label className="flex items-center gap-2 mt-3">
        <input
          type="checkbox"
          name="unesco_status"
          checked={formData.unesco_status}
          onChange={handleChange}
        />
        UNESCO Site
      </label>
    </div>
  );
};

export default CategorySection;
