import axios from "axios";

export const fetchApiData = (search, page) => {
  let API = `https://hn.algolia.com/api/v1/search?query=${search}&page=${page}`;
  return axios.get(API);
};
