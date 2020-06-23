import {
	GET_FILMS_ALL,
	GET_FILMS_MOVIES,
	GET_FILMS_TVSERIES,
	GET_FILMS_DETAILS,
	LOADING_TRUE,
	ERROR
} from '../actions/types';

const initialState = {
	loading: true,
	filmsAll: [],
	filmsMovies: [],
	filmsTVSeries: [],
	filmDetails: null,
	error: ''
};

export default function(state = initialState, actions) {
	const { type, payload } = actions;

	switch (type) {
		case GET_FILMS_ALL:
			return {
				...state,
				filmsAll: payload,
				loading: false
			};
		case GET_FILMS_MOVIES:
			return {
				...state,
				filmsMovies: payload,
				loading: false
			};
		case GET_FILMS_TVSERIES:
			return {
				...state,
				filmsTVSeries: payload,
				loading: false
			};
		case GET_FILMS_DETAILS:
			return {
				...state,
				filmDetails: payload,
				loading: false
			};
		case ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		case LOADING_TRUE:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
