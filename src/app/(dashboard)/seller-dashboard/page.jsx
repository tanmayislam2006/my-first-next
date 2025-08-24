"use client";

import React from "react";

const salesData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1900 },
  { month: "Mar", sales: 1500 },
  { month: "Apr", sales: 2200 },
  { month: "May", sales: 1800 },
];

const recentOrders = [
  { id: "#12345", product: "Wireless Headphones", customer: "Tanmay Islam", status: "Shipped" },
  { id: "#12346", product: "Smartphone", customer: "Alex Roy", status: "Processing" },
  { id: "#12347", product: "Shoes", customer: "John Doe", status: "Delivered" },
];

const SellerDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold">📊 Seller Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-500">Total Sales</p>
          <p className="text-2xl font-bold">$12,340</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-500">Orders</p>
          <p className="text-2xl font-bold">235</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-500">Products</p>
          <p className="text-2xl font-bold">56</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4">
          <p className="text-gray-500">Customers</p>
          <p className="text-2xl font-bold">128</p>
        </div>
      </div>

      {/* Sales Chart (static look) */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales (static)</h2>
        <div className="flex items-end space-x-4 h-48">
          {salesData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div
                className="bg-blue-500 w-10 rounded-t"
                style={{ height: `${item.sales / 30}px` }} // simple height logic
              ></div>
              <p className="text-sm mt-2">{item.month}</p>
            </div>
          ))}
        </div>
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
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.product}</td>
                  <td className="p-3">{order.customer}</td>
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
    </div>
  );
};

export default SellerDashboard;
