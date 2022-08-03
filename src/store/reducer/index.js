const init = {
  hits: [],
  nbPages: 0,
  page: 0,
  query: "",
};

function reducer(state = init, action) {
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curEle) => curEle.objectID !== action.payload),
      };
  }
  return state;
}

export default reducer;
