export const getStories = (data) => {
  return { type: "GET_STORIES", payload: { hits: data.hits } };
};

export const removePost = (payload) => {
  return { type: "REMOVE_POST", payload };
};
