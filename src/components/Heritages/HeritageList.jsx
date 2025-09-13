import React, { useEffect, useState } from "react";
import { getAllHeritages, updateHeritage } from "../../api/heritageAPI";

// Utility function to truncate long descriptions
const truncate = (text, length = 100) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const HeritageList = ({ token, isAdmin }) => {
  const [heritages, setHeritages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingHeritage, setEditingHeritage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: { city: "", state: "", country: "India" },
    category: "Heritage",
    description: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchHeritages = async () => {
      try {
        const data = await getAllHeritages();
        setHeritages(data);
      } catch (err) {
        console.error("Failed to load heritages", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHeritages();
  }, []);

  const handleEditClick = (heritage) => {
    setEditingHeritage(heritage);
    setFormData({
      name: heritage.name,
      location: heritage.location || { city: "", state: "", country: "India" },
      category: heritage.category || "Heritage",
      description: heritage.description || "",
    });
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("location.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        location: { ...prev.location, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHeritage(editingHeritage._id, formData, token);
      setMessage("✅ Heritage updated successfully!");
      // Update the local list
      setHeritages((prev) =>
        prev.map((h) =>
          h._id === editingHeritage._id ? { ...h, ...formData } : h
        )
      );
      setEditingHeritage(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to update heritage");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Heritage Sites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {heritages.map((h) => (
          <div
            key={h._id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Image */}
            {h.images?.length > 0 ? (
              <img
                src={h.images[0]}
                alt={h.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded mb-3">
                <span className="text-gray-500">No Image</span>
              </div>
            )}

            {/* Header */}
            <h3 className="text-xl font-semibold mb-1">{h.name}</h3>
            <p className="text-gray-600 mb-1">
              {h.location.city}, {h.location.state}, {h.location.country}
            </p>

            {/* Category & Type */}
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-medium">Category:</span> {h.category} |{" "}
              <span className="font-medium">Type:</span>{" "}
              {h.heritage_type || "N/A"}
            </p>

            {/* Built info */}
            {h.build_year && (
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">Built Year:</span> {h.build_year}{" "}
                {h.build_by && `by ${h.build_by}`}
              </p>
            )}

            {/* UNESCO */}
            {h.unesco_status && (
              <p className="text-green-600 font-medium mb-1">
                🌍 UNESCO Heritage
              </p>
            )}

            {/* Tags */}
            {h.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {h.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-gray-700 text-sm mb-2">
              {truncate(h.description, 120)}
            </p>

            {/* Extra Info */}
            <div className="mt-auto text-sm text-gray-500">
              {h.extra_info?.visitors_per_year > 0 && (
                <p>Visitors/Year: {h.extra_info.visitors_per_year}</p>
              )}
              {(h.extra_info?.entry_fee?.indian ||
                h.extra_info?.entry_fee?.foreigner) && (
                <p>
                  Entry Fee: ₹{h.extra_info.entry_fee.indian} / $
                  {h.extra_info.entry_fee.foreigner}
                </p>
              )}
              {h.extra_info?.timings && <p>Timings: {h.extra_info.timings}</p>}
              {h.extra_info?.closed_on && (
                <p>Closed On: {h.extra_info.closed_on}</p>
              )}
            </div>

            {/* Edit Button (Admin only) */}
            {isAdmin && (
              <button
                className="mt-3 bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                onClick={() => handleEditClick(h)}
              >
                ✏️ Edit
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingHeritage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Heritage</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Heritage Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="location.city"
                placeholder="City"
                value={formData.location.city}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="location.state"
                placeholder="State"
                value={formData.location.state}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="location.country"
                placeholder="Country"
                value={formData.location.country}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingHeritage(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
            {message && <p className="mt-3 text-sm">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeritageList;
