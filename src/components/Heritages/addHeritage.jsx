import React, { useState } from "react";
import { addHeritage } from "../../api/heritageAPI";

const AddHeritage = ({ token }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: {
      city: "",
      state: "",
      country: "India",
      latitude: "",
      longitude: "",
    },
    build_year: "",
    build_by: "",
    category: "Heritage",
    heritage_type: "Cultural",
    unesco_status: false,
    description: "",
    images: [],
    videos: [],
    tags: [],
    extra_info: {
      visitors_per_year: 0,
      entry_fee: { indian: 0, foreigner: 0 },
      timings: "",
      closed_on: "",
    },
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const keys = name.split(".");
      if (keys[0] === "location" || keys[0] === "extra_info") {
        setFormData((prev) => ({
          ...prev,
          [keys[0]]: {
            ...prev[keys[0]],
            [keys[1]]: type === "checkbox" ? checked : value,
          },
        }));
      } else if (keys[0] === "entry_fee") {
        setFormData((prev) => ({
          ...prev,
          extra_info: {
            ...prev.extra_info,
            entry_fee: {
              ...prev.extra_info.entry_fee,
              [keys[1]]: Number(value),
            },
          },
        }));
      }
    } else if (["images", "videos", "tags"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value.split(",").map((v) => v.trim()),
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addHeritage(formData, token);
      setMessage("✅ Heritage added successfully!");
      // Reset form
      setFormData({
        name: "",
        location: {
          city: "",
          state: "",
          country: "India",
          latitude: "",
          longitude: "",
        },
        build_year: "",
        build_by: "",
        category: "Heritage",
        heritage_type: "Cultural",
        unesco_status: false,
        description: "",
        images: [],
        videos: [],
        tags: [],
        extra_info: {
          visitors_per_year: 0,
          entry_fee: { indian: 0, foreigner: 0 },
          timings: "",
          closed_on: "",
        },
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add heritage");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 4000); // auto clear msg
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-teal-700">
        Add New Heritage
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
      >
        {/* Basic Info */}
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

        {/* Location */}
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

        {/* Category & Type */}
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

        {/* UNESCO */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="unesco_status"
            checked={formData.unesco_status}
            onChange={handleChange}
          />
          UNESCO Site
        </label>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows="3"
        ></textarea>

        {/* Media & Tags */}
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

        {/* Extra Info */}
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

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Heritage"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 font-semibold ${
            message.includes("✅") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AddHeritage;
