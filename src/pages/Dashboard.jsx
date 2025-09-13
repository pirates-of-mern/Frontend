import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { fetchAllUsers } from "../api/adminAPI";
import { getAllHeritages } from "../api/heritageAPI";
import { PlusCircle, Landmark, Users } from "lucide-react";

const Dashboard = () => {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const [heritages, setHeritages] = useState([]);
  const [loadingHeritages, setLoadingHeritages] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Fetch users only for admin
    const getUsers = async () => {
      try {
        const data = await fetchAllUsers(token);
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users", err);
      } finally {
        setLoadingUsers(false);
      }
    };

    if (user?.isAdmin) getUsers();

    // Fetch all heritages (for stats)
    const getHeritages = async () => {
      try {
        const data = await getAllHeritages();
        setHeritages(data);
      } catch (err) {
        console.error("Error fetching heritages", err);
      } finally {
        setLoadingHeritages(false);
      }
    };
    getHeritages();
  }, [user, navigate, token]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-10 relative overflow-hidden">
        {/* Profile Icon */}
        <div className="absolute top-6 right-6">
          <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            {user.name[0].toUpperCase()}
          </div>
        </div>

        {/* Welcome */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome, <span className="text-teal-600">{user.name}</span>!
        </h1>

        {user.isAdmin && (
          <span className="inline-block bg-yellow-400 text-gray-800 px-4 py-1 rounded-full font-semibold mb-6">
            ADMIN
          </span>
        )}

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
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              📧 Email
            </h2>
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

          <div className="p-5 bg-teal-50 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              🆔 User ID
            </h2>
            <p className="text-gray-800">{user._id}</p>
          </div>

          {/* Heritage Stats */}
          <div className="p-5 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              🏛 Total Heritages
            </h2>
            {loadingHeritages ? (
              <p>Loading...</p>
            ) : (
              <p className="text-gray-800">{heritages.length}</p>
            )}
          </div>

          {/* Total Users (Admin only) */}
          {user.isAdmin && (
            <div className="p-5 bg-yellow-50 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Users size={18} /> Total Users
              </h2>
              {loadingUsers ? (
                <p>Loading...</p>
              ) : (
                <p className="text-gray-800">{users.length}</p>
              )}
            </div>
          )}
        </div>

        {/* Admin User List */}
        {user.isAdmin && (
          <div className="mt-8 p-6 bg-teal-50 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold mb-4">All Users</h2>
            {loadingUsers ? (
              <p>Loading users...</p>
            ) : (
              <ul className="space-y-1 max-h-64 overflow-y-auto">
                {users.map((u) => (
                  <li
                    key={u._id}
                    className="p-2 bg-white rounded shadow-sm hover:shadow-md transition flex justify-between"
                  >
                    <span>
                      {u.name} ({u.role || "user"})
                    </span>
                    <span className="text-gray-500">{u.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Profile Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-green-100 via-teal-50 to-green-100 rounded-xl shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Profile Summary
          </h2>
          <p className="text-gray-700">
            {user.isAdmin
              ? "You have admin privileges to manage heritage data and users."
              : "You are a regular user. Explore and contribute to our heritage collection."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
