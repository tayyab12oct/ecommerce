import axios from "axios";

export const fetchApiData = (search) => {
  let API = `https://hn.algolia.com/api/v1/search?query=${search}`;
  return axios.get(API);
};
