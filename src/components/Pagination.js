import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../store/actions";
import { fetchApiData } from "../store/api/fetch";

function Pagination() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data);
  const getNextPage = () => {
    fetchApiData("", data.page + 1).then((res) => {
      return dispatch(nextPage(res)), console.log("data", res);
    });
  };
  const getPrevPage = () => {
    fetchApiData("", data.page - 1).then((res) => {
      return dispatch(prevPage(res)), console.log("data", res);
    });
  };
  return (
    <div className="flex items-center justify-between max-w-xs mx-auto">
      <button
        className="bg-indigo-500 rounded hover:bg-indigo-600 px-6 py-1.5 text-white"
        onClick={getPrevPage}
      >
        Prev
      </button>
      <span className="text-sm opacity-60">
        {data.page} of {data.nbPages}
      </span>
      <button
        className="bg-indigo-500 rounded hover:bg-indigo-600 px-6 py-1.5 text-white"
        onClick={getNextPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
