import React from "react";
import { useGlobalContext } from "../context";

function Pagination() {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <div className="flex items-center justify-between max-w-xs mx-auto">
      <button
        className="bg-indigo-500 rounded hover:bg-indigo-600 px-6 py-1.5 text-white"
        onClick={() => getPrevPage()}
      >
        Prev
      </button>
      <span className="text-sm opacity-60">
        {page + 1} of {nbPages}
      </span>
      <button
        className="bg-indigo-500 rounded hover:bg-indigo-600 px-6 py-1.5 text-white"
        onClick={() => getNextPage()}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
