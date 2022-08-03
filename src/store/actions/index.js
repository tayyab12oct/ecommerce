export const getStories = (data) => {
  return {
    type: "GET_STORIES",
    payload: { hits: data.hits, nbPages: data.nbPages },
  };
};

export const removePost = (payload) => {
  return { type: "REMOVE_POST", payload };
};

export const prevPage = () => {
  return { type: "PREV_PAGE" };
};
export const nextPage = (res) => {
  console.log(res, "response of next page");
  return {
    type: "NEXT_PAGE",
    payload: {
      hits: res.data.hits,
      nbPages: res.data.nbPages,
    },
  };
};
