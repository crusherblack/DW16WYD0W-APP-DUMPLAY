import {
	GET_MUSIC_ALL,
	GET_MUSIC_FAIL,
	ADD_ARTIST_SUCCESS,
	ADD_ARTIST_FAIL,
	ADD_MUSIC_SUCCESS,
	ADD_MUSIC_FAIL
} from '../actions/types';

const initialState = {
	loading: true,
	musicAll: [],
	error: ''
};

export default function(state = initialState, actions) {
	const { type, payload } = actions;

	switch (type) {
		case GET_MUSIC_ALL:
			return {
				...state,
				musicAll: payload,
				loading: false
			};
		case ADD_ARTIST_SUCCESS:
			return {
				...state,
				loading: false
			};
		case ADD_MUSIC_SUCCESS:
			return {
				...state,
				loading: false
			};
		case GET_MUSIC_FAIL:
		case ADD_ARTIST_FAIL:
		case ADD_MUSIC_FAIL:
			return {
				...state,
				error: payload,
				loading: false
			};

		default:
			return state;
	}
}
