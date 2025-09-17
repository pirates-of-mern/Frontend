import React from "react";

const BasicInfoSection = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Basic Info</h3>
      <input
        type="text"
        name="name"
        placeholder="Heritage Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          name="build_year"
          placeholder="Build Year"
          value={formData.build_year}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="build_by"
          placeholder="Built By"
          value={formData.build_by}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default BasicInfoSection;
