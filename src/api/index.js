import axios from "axios";
// const url = "http://localhost:4000/";
// const url = "https://movie-star-movie.herokuapp.com/";
const url = "https://moviestar-star.herokuapp.com/";
export const createMovie = (data) => axios.post(`${url}movie/postData`, data);
export const getMovie = (page, limit) =>
  axios.get(`${url}movie/getMovie?page=${page}&limit=${limit}`);
export const getMovieDetail = (id) => axios.get(`${url}movie/${id}`);
export const getSearchMovie = (text) =>
  axios.get(`${url}movie/searchMovie/${text}`);

export const getFilterMovies = (filterField) =>
  axios.get(`${url}movie/filterMovie/${filterField}`);

////////////////////

export const createMessage = (data) =>
  axios.post(`${url}message/createMessage`, data);
export const getMessage = (tagMessge) =>
  axios.get(`${url}message/getMessage/${tagMessge}`);

export const deleteMessage = (id) => axios.delete(`${url}message/${id}`);

export const getIpAddress = async () => {
  const res = await axios.get("https://geolocation-db.com/json/");
  console.log(res.data);
  console.log(res.data.IPv4);
  return res.data.IPv4;
  // setIP(res.data.IPv4);
};
