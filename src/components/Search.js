import React from "react";
import { useGlobalContext } from "../context";

function Search() {
  const { query, searchPost } = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Search here"
        value={query}
        onChange={(e) => searchPost(e.target.value)}
        className="w-full py-3 px-4 focus:outline-none border border-indigo-500 rounded-md"
      />
    </form>
  );
}

export default Search;
