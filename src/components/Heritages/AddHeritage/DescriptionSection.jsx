import React from "react";

const DescriptionSection = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        rows="3"
      ></textarea>
    </div>
  );
};

export default DescriptionSection;
