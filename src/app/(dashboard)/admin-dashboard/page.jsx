"use client";

import React from "react";

const stats = [
  { title: "Total Users", value: "4,532" },
  { title: "Total Sellers", value: "320" },
  { title: "Total Orders", value: "12,430" },
  { title: "Revenue", value: "$98,340" },
];

const recentUsers = [
  { id: 1, name: "Tanmay Islam", role: "Seller", status: "Active" },
  { id: 2, name: "Alex Roy", role: "Customer", status: "Active" },
  { id: 3, name: "John Doe", role: "Seller", status: "Suspended" },
];

const recentReports = [
  { id: "#R123", issue: "Fake Product", reportedBy: "Alex Roy", status: "Pending" },
  { id: "#R124", issue: "Late Delivery", reportedBy: "John Doe", status: "Resolved" },
  { id: "#R125", issue: "Wrong Item", reportedBy: "Sarah Khan", status: "In Review" },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold">⚙️ Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-4 text-center"
          >
            <p className="text-gray-500">{stat.title}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Users */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Report ID</th>
                <th className="p-3 text-left">Issue</th>
                <th className="p-3 text-left">Reported By</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.id} className="border-t">
                  <td className="p-3">{report.id}</td>
                  <td className="p-3">{report.issue}</td>
                  <td className="p-3">{report.reportedBy}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        report.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : report.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
