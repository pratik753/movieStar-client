import * as api from "../api/index.js";
export const createMovie = async (stock) => {
  console.log("hii");
  try {
    const { data } = await api.createMovie(stock);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  console.log("hii2");
};
export const getMovies = async (page, limit) => {
  try {
    const { data } = await api.getMovie(page, limit);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieDetail = async (id) => {
  try {
    console.log(id);
    const { data } = await api.getMovieDetail(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getFilterMovies = async (filterField) => {
  try {
    console.log(filterField);
    const { data } = await api.getFilterMovies(filterField);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getSearchMovie = async (text) => {
  try {
    // console.log(filterField);
    const { data } = await api.getSearchMovie(text);
    return data;
  } catch (error) {
    console.log(error);
  }
};
/////////////////////////
export const createMessage = async (message) => {
  try {
    const { data } = await api.createMessage(message);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const getMessage = async (tagMessge) => {
  try {
    const { data } = await api.getMessage(tagMessge);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteMessage = async (id) => {
  try {
    const { data } = await api.deleteMessage(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
