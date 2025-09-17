import React from "react";

const ExtraInfoSection = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Extra Info</h3>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          name="extra_info.visitors_per_year"
          placeholder="Visitors Per Year"
          value={formData.extra_info.visitors_per_year}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="extra_info.timings"
          placeholder="Timings"
          value={formData.extra_info.timings}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="extra_info.closed_on"
          placeholder="Closed On"
          value={formData.extra_info.closed_on}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <input
          type="number"
          name="entry_fee.indian"
          placeholder="Entry Fee (Indian)"
          value={formData.extra_info.entry_fee.indian}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="entry_fee.foreigner"
          placeholder="Entry Fee (Foreigner)"
          value={formData.extra_info.entry_fee.foreigner}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default ExtraInfoSection;
