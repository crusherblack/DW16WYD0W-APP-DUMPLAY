import { API } from "../../config/api";

import { GET_MUSIC_ALL, GET_MUSIC_FAIL } from "./types";

//Get All Films
export const getMusicAll = (limit) => async (dispatch) => {
  try {
    let res = await API.get(`music?page=1&limit=${limit}`);
    dispatch({
      type: GET_MUSIC_ALL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_MUSIC_FAIL,
      payload: err.response.data.error.message,
    });
  }
};

//Add Music
export const addMusic = () => async (dispatch) => {
  try {
    let res = await API.get(`music?page=1&limit`);
    dispatch({
      type: GET_MUSIC_ALL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_MUSIC_FAIL,
      payload: err.res.data.error.message,
    });
  }
};
