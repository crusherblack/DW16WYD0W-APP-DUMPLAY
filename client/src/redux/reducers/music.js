import {
  GET_MUSIC_ALL,
  GET_MUSIC_FAIL,
  ADD_ARTIST_SUCCESS,
  ADD_ARTIST_FAIL,
  ADD_MUSIC_SUCCESS,
  ADD_MUSIC_FAIL,
  GET_ARTIS_ALL,
  GET_ARTIS_FAIL,
} from "../actions/types";

const initialState = {
  loading: true,
  musicAll: [],
  artisAll: [],
  error: "",
  alert: "",
};

export default function (state = initialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case GET_MUSIC_ALL:
      return {
        ...state,
        musicAll: payload,
        loading: false,
      };
    case GET_ARTIS_ALL:
      return {
        ...state,
        artisAll: payload,
        loading: false,
      };
    case ADD_ARTIST_SUCCESS:
      return {
        ...state,
        alert: "Artis has been successfully added",
        loading: false,
      };
    case ADD_MUSIC_SUCCESS:
      return {
        ...state,
        alert: "Music has been successfully added",
        loading: false,
      };
    case GET_MUSIC_FAIL:
    case ADD_ARTIST_FAIL:
    case ADD_MUSIC_FAIL:
    case GET_ARTIS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
