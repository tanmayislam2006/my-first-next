"use client";

import React from "react";

const stats = [
  { title: "My Orders", value: "12" },
  { title: "Pending Orders", value: "3" },
  { title: "Wishlist Items", value: "8" },
  { title: "Total Spent", value: "$1,240" },
];

const recentOrders = [
  { id: "#1001", product: "Wireless Headphones", date: "Aug 1, 2025", status: "Delivered" },
  { id: "#1002", product: "Smartphone", date: "Aug 5, 2025", status: "Shipped" },
  { id: "#1003", product: "Running Shoes", date: "Aug 10, 2025", status: "Processing" },
];

const wishlist = [
  { id: 1, product: "Smart Watch", price: "$120" },
  { id: 2, product: "Gaming Keyboard", price: "$90" },
  { id: 3, product: "Bluetooth Speaker", price: "$60" },
];

const UserDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold">👤 User Dashboard</h1>

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

      {/* Recent Orders */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.product}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Wishlist */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">My Wishlist</h2>
        <ul className="space-y-3">
          {wishlist.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{item.product}</span>
              <span className="font-medium">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
