import React from "react";
import { Users } from "lucide-react";
import UserDashboard from "./UserDashboard";

const AdminDashboard = ({
  user,
  users,
  loadingUsers,
  heritages,
  loadingHeritages,
}) => {
  return (
    <>
      {/* Reuse UserDashboard for shared content */}
      <UserDashboard
        user={user}
        heritages={heritages}
        loadingHeritages={loadingHeritages}
      />

      {/* Admin Stats */}
      <div className="p-5 bg-yellow-50 rounded-xl shadow hover:shadow-lg transition mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <Users size={18} /> Total Users
        </h2>
        {loadingUsers ? <p>Loading...</p> : <p>{users.length}</p>}
      </div>

      {/* Admin User List */}
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

      {/* Admin Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 via-teal-50 to-yellow-100 rounded-xl shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Admin Summary</h2>
        <p className="text-gray-700">
          You have admin privileges to manage heritage data and users.
        </p>
      </div>
    </>
  );
};

export default AdminDashboard;
