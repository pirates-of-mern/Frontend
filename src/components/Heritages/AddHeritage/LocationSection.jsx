import React from "react";

const LocationSection = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="location.city"
          placeholder="City"
          value={formData.location.city}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location.state"
          placeholder="State"
          value={formData.location.state}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location.country"
          placeholder="Country"
          value={formData.location.country}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="location.latitude"
          placeholder="Latitude"
          value={formData.location.latitude}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="location.longitude"
          placeholder="Longitude"
          value={formData.location.longitude}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default LocationSection;
