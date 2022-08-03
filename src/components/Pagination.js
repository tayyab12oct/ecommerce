import React from "react";

function Pagination() {
  return (
    <div className="flex items-center justify-between max-w-xs mx-auto">
      <button className="bg-indigo-500 rounded hover:bg-indigo-600 px-6 py-1.5 text-white">
        Prev
      </button>
      <span className="text-sm opacity-60"></span>
      <button className="bg-indigo-500 rounded hover:bg-indigo-600 px-6 py-1.5 text-white">
        Next
      </button>
    </div>
  );
}

export default Pagination;
