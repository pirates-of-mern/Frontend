import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers } from "../../api/adminAPI";
import { getAllHeritages } from "../../api/heritageAPI";
import AdminDashboard from "./adminDashboard";
import UserDashboard from "./userDashboard";

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
    if (user?.isAdmin) {
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
      getUsers();
    }

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

        {/* Render User or Admin Dashboard */}
        {user.isAdmin ? (
          <AdminDashboard
            user={user}
            users={users}
            loadingUsers={loadingUsers}
            heritages={heritages}
            loadingHeritages={loadingHeritages}
          />
        ) : (
          <UserDashboard
            user={user}
            heritages={heritages}
            loadingHeritages={loadingHeritages}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
