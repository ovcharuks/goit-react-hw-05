import axios from "axios";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjNiNTI1NTI0MDFkOGM4MTkxY2ViMzNiNTUxMzdlZSIsIm5iZiI6MTczNjc3MDk4My41MzQwMDAyLCJzdWIiOiI2Nzg1MDVhNzA2OTBhYzA2ZTc3Yjc4NWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tBKePAUCsFcHKzuO3T5EHbMcDDHKWhQ0VYtgPwgQ8Vs";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const trandMoviesFetch = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return data.results;
};

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return data;
};