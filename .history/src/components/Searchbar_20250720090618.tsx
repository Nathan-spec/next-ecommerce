"use client";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Search
      </button>
    </div>
  );
}

export default Searchbar;