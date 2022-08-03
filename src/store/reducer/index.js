const init = {
  hits: [],
  nbPages: 0,
  page: 0,
};

function reducer(state = init, action) {
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curEle) => curEle.objectID !== action.payload),
      };
    case "NEXT_PAGE": {
      return {
        ...state,
        page: state.page + 1,
        hits: action.payload.hits,
      };
    }
    case "PREV_PAGE": {
      return {
        ...state,
        page: state.page - 1,
      };
    }
  }
  return state;
}

export default reducer;
