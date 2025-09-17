import React from "react";
import { Link } from "react-router-dom";
import { Landmark, PlusCircle } from "lucide-react";

const UserDashboard = ({ user, heritages, loadingHeritages }) => {
  return (
    <>
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          to="/heritages"
          className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-teal-500 to-green-600 
                     text-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          <Landmark size={20} />
          <span className="font-semibold">View Heritages</span>
        </Link>

        <Link
          to="/addheritage"
          className="flex items-center gap-2 bg-gradient-to-r from-teal-400 via-green-500 to-teal-600 
                     text-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          <PlusCircle size={20} />
          <span className="font-semibold">Add Heritage</span>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-teal-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">📧 Email</h2>
          <p className="text-gray-800">{user.email}</p>
        </div>

        <div className="p-5 bg-teal-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            🏆 Points
          </h2>
          <p className="text-gray-800">{user.points}</p>
        </div>

        <div className="p-5 bg-teal-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            📅 Joined On
          </h2>
          <p className="text-gray-800">
            {new Date(user.date_joined).toLocaleDateString()}
          </p>
        </div>

        <div className="p-5 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            🏛 Total Heritages
          </h2>
          {loadingHeritages ? <p>Loading...</p> : <p>{heritages.length}</p>}
        </div>
      </div>

      {/* Profile Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-green-100 via-teal-50 to-green-100 rounded-xl shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Profile Summary
        </h2>
        <p className="text-gray-700">
          You are a regular user. Explore and contribute to our heritage
          collection.
        </p>
      </div>
    </>
  );
};

export default UserDashboard;
