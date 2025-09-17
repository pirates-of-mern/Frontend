import React from "react";

const EditHeritageModal = ({
  formData,
  setFormData,
  onClose,
  onSubmit,
  message,
}) => {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Heritage</h2>
        <form onSubmit={onSubmit} className="space-y-3">
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
              onClick={onClose}
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
  );
};

export default EditHeritageModal;
