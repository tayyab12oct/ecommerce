import React from "react";
import { useDispatch } from "react-redux";
import { getStories } from "../store/actions";
import { fetchApiData } from "../store/api/fetch";

function Search() {
  const dispatch = useDispatch();
  const search = (e) => {
    fetchApiData(e?.target?.value).then((res) => {
      return dispatch(getStories(res?.data));
    });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Search here"
        onChange={search}
        className="w-full py-3 px-4 focus:outline-none border border-indigo-500 rounded-md"
      />
    </form>
  );
}

export default Search;
