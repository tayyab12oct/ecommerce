import React, { useContext, useEffect, useReducer, createContext } from "react";
import reducer from "./reducer";

const AppContext = createContext();
const initialState = {
  isLoading: true,
  query: "",
  page: 0,
  nbPages: 50,
  hits: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let API = "https://hn.algolia.com/api/v1/search?";

  const fetchApiData = async (url) => {
    dispatch({ type: "GET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (id) => {
    dispatch({ type: "REMOVE_POST", payload: id });
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
