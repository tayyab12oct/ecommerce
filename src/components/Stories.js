import React from "react";
import { useGlobalContext } from "../context";

function Stories() {
  const { hits, isLoading, removePost } = useGlobalContext();
  return (
    <div className="pb-8">
      {isLoading ? (
        <h1 className="text-center font-semibold text-xl pt-5">Loading....</h1>
      ) : (
        <ul className="space-y-6">
          {hits?.map((v) => {
            return (
              <li
                key={v.objectID}
                className="border rounded-md shadow px-6 py-4 max-w-xl mx-auto space-y-3"
              >
                <p className="font-semibold text-lg">{v.title}</p>
                <p className="opacity-60">By {v.author}</p>
                <div className="flex justify-between">
                  <a
                    href={v.url}
                    target="_blank"
                    className="text-indigo-500 text-sm"
                  >
                    Read more
                  </a>
                  <p
                    className="text-red-500 cursor-pointer text-sm"
                    onClick={() => removePost(v.objectID)}
                  >
                    Remove
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Stories;
