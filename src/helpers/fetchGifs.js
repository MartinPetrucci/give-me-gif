import axios from "axios";
// export const fetchGifs = async (category, limit = 10) => {
//   const API_KEY = "ejRjC0jqmRLew4rCSGq79kYlEqz2z9X2";
//   const BASE_URL = "https://api.giphy.com/v1/gifs/search";
//   const url = `${BASE_URL}?q=${category}&api_key=${API_KEY}&limit=${limit}`;
//   const { data } = await axios.get(url);
//   const gifs = data.data.map(({ id, title, images }) => {
//     return { id, title, url: images.downsized_medium.url };
//   });
//   return gifs;
// };

export const fetchGiphyAPI = async (queryParams, endpoint = "") => {
  const API_KEY = "ejRjC0jqmRLew4rCSGq79kYlEqz2z9X2";
  const BASE_URL = `https://api.giphy.com/v1/gifs/${endpoint}`;
  const config = {
    params: {
      api_key: API_KEY,
      ...queryParams,
    },
  };
  const response  = await axios.get(`${BASE_URL}`, config);
  let results = endpoint === "random" ? [response.data.data] : response.data.data
  const gifs = results.map(({ id, title, images }) => {
    return { id, title, url: images.downsized_medium.url };
  });
  return gifs;
};

export const fetchSearchGifs = async (category) => {
  return await fetchGiphyAPI({ q: category }, "search");
};
export const fetchTrendingGifs = async () => {
  return await fetchGiphyAPI({}, "trending");
};
export const fetchRandomGifs = async (tag = "") => {
  return await fetchGiphyAPI({ tag: tag }, "random");
};
