import React from "react";

const MediaSection = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Media</h3>
      <input
        type="text"
        name="images"
        placeholder="Image URLs (comma separated)"
        value={formData.images.join(", ")}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
      />
      <input
        type="text"
        name="videos"
        placeholder="Video URLs (comma separated)"
        value={formData.videos.join(", ")}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-2"
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        value={formData.tags.join(", ")}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
    </div>
  );
};

export default MediaSection;
