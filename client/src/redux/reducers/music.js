import { GET_MUSIC_ALL, GET_MUSIC_FAIL, ERROR } from "../actions/types";

const initialState = {
  loading: true,
  musicAll: [],
  error: "",
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
    case GET_MUSIC_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
