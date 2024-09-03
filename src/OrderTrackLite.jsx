import React, { useState } from 'react';

const OrderTrackLite = () => {
  const [showTables, setShowTables] = useState(false);

  const handleSearch = () => {
    setShowTables(true);
  };

  return (
    <div className="flex flex-col items-start min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold mb-4">Order Track Lite</h1>
      <div className="flex flex-col space-y-4 w-full max-w-lg mb-6">
        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-700 font-semibold min-w-max">Sales Order Number:</label>
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-700 font-semibold min-w-max">Customer Purchase Order Number:</label>
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-700 font-semibold min-w-max">TMS Purchase Order Number:</label>
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white py-1.5 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </div>

      {showTables && (
        <div className="space-y-4">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg mb-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">S No</th>
                <th className="border px-4 py-2">Customer Purchase Order Number</th>
                <th className="border px-4 py-2">Company</th>
                <th className="border px-4 py-2">Account Manager</th>
                <th className="border px-4 py-2">Order Date</th>
                <th className="border px-4 py-2">Total Sales</th>
                <th className="border px-4 py-2">Order Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">CPON123456</td>
                <td className="border px-4 py-2">XYZ Corp</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">01/08/2024</td>
                <td className="border px-4 py-2">$5000</td>
                <td className="border px-4 py-2">Pending</td>
              </tr>
            </tbody>
          </table>

          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="border px-4 py-2">Products</th>
                <th className="border px-4 py-2">TMS PO</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Product A</td>
                <td className="border px-4 py-2">PORD2421006</td>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">$1000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Product B</td>
                <td className="border px-4 py-2">PORD2421006</td>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">$500</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderTrackLite;
