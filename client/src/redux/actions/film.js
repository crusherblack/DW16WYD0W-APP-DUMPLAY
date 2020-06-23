import { API } from "../../config/api";

import {
  GET_FILMS_ALL,
  GET_FILMS_MOVIES,
  GET_FILMS_TVSERIES,
  GET_FILMS_DETAILS,
  LOADING_TRUE,
  ERROR,
} from "./types";

//Get All Films
export const getFilmsAll = (category, limit) => async (dispatch) => {
  try {
    let res = await API.get(
      `film?page=1&limit=${limit}&categoryId=${category}`
    );
    dispatch({
      type: GET_FILMS_ALL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

//Get Films Movies
export const getFilmsMovies = (limit) => async (dispatch) => {
  try {
    let res = await API.get(`/film?page=1&limit=${limit}&categoryId=2`);
    dispatch({
      type: GET_FILMS_MOVIES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

//Get Films TVSeries
export const getFilmsTVSeries = (limit) => async (dispatch) => {
  try {
    let res = await API.get(`/film?page=1&limit=${limit}&categoryId=1`);
    dispatch({
      type: GET_FILMS_TVSERIES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

export const getDetailsFilm = (id) => async (dispatch) => {
  try {
    let res = await API.get(`/film/${id}`);
    dispatch({
      type: GET_FILMS_DETAILS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

export const addFilm = (payload, redirectToMovieList) => async (dispatch) => {
  try {
    if (payload.categoryId == 1) {
      const {
        title,
        year,
        categoryId,
        description,
        thumbnailFilm,
        episodes,
      } = payload;

      const formData = new FormData();

      formData.append("title", title);
      formData.append("thumbnailFilm", thumbnailFilm);
      formData.append("year", year);
      formData.append("categoryId", categoryId);
      formData.append("description", description);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      //for (var value of formData.values()) {
      // console.log(value);
      //}

      let res = await API.post(`/film`, formData, config);

      if (res) {
        episodes.forEach(async (episode) => {
          const { titleEpisode, linkFilm, attachThumbnail } = episode;

          const formData = new FormData();

          formData.append("title", titleEpisode);
          formData.append("thumbnailFilm", attachThumbnail);
          formData.append("linkFilm", linkFilm);
          formData.append("filmId", res.data.data.id);

          const config = {
            headers: {
              "content-type": "multipart/form-data",
            },
          };

          await API.post("/episode", formData, config);
          redirectToMovieList();
        });
      }
    } else if (payload.categoryId == 2) {
      const {
        title,
        year,
        categoryId,
        description,
        thumbnailFilm,
        urlMovie,
      } = payload;

      const formData = new FormData();

      formData.append("title", title);
      formData.append("thumbnailFilm", thumbnailFilm);
      formData.append("year", year);
      formData.append("categoryId", categoryId);
      formData.append("description", description);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      //for (var value of formData.values()) {
      // console.log(value);
      //}

      let res = await API.post(`/film`, formData, config);

      if (res) {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("thumbnailFilm", thumbnailFilm);
        formData.append("linkFilm", urlMovie);
        formData.append("filmId", res.data.data.id);

        const configMovie = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        await API.post("/episode", formData, configMovie);
        redirectToMovieList();
      }
    }
  } catch (err) {}
};
