const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LOADING":
      return { ...state, isLoading: true };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curElm) => curElm.objectID != action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "PREV_PAGE":
      let pageNumDec = state.page - 1;
      if (pageNumDec <= 0) {
        pageNumDec = 0;
      }
      return {
        ...state,
        page: pageNumDec,
      };
    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };
  }
  return state;
};
export default reducer;
