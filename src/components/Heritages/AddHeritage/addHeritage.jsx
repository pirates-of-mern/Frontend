import React, { useState } from "react";
import { addHeritage } from "../../../api/heritageAPI";

// Import form sections
import BasicInfoSection from "./BasicInfoSection";
import LocationSection from "./LocationSection";
import CategorySection from "./CategorySection";
import DescriptionSection from "./DescriptionSection";
import MediaSection from "./MediaSection";
import ExtraInfoSection from "./ExtraInfoSection";

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

  // ✅ Generic handleChange
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

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addHeritage(formData, token);
      setMessage("✅ Heritage added successfully!");
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
      setTimeout(() => setMessage(""), 4000);
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
        <BasicInfoSection formData={formData} handleChange={handleChange} />
        <LocationSection formData={formData} handleChange={handleChange} />
        <CategorySection formData={formData} handleChange={handleChange} />
        <DescriptionSection formData={formData} handleChange={handleChange} />
        <MediaSection formData={formData} handleChange={handleChange} />
        <ExtraInfoSection formData={formData} handleChange={handleChange} />

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
