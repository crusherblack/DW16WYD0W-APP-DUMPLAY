import {
	PAYMENT_ERROR,
	PAYMENT_SUCCESS,
	GET_TRANSACTION_SUCCESS,
	GET_TRANSACTION_ERROR,
	PAYMENT_UPDATE_SUCCES,
	PAYMENT_UPDATE_FAIL
} from '../actions/types';

const initialState = {
	loading: true,
	error: '',
	transaction: []
};

export default function(state = initialState, actions) {
	const { type, payload } = actions;

	switch (type) {
		case GET_TRANSACTION_SUCCESS:
			return {
				...state,
				transaction: payload,
				loading: false
			};

		case PAYMENT_SUCCESS:
			return {
				...state,
				loading: false
			};
		case PAYMENT_UPDATE_SUCCES:
			return {
				...state,
				transaction: state.transaction.map(
					(data) =>
						data.id == payload.id
							? {
									...data,
									status: payload.status,
									userInfo: payload.userInfo
								}
							: data
				),
				loading: false
			};
		case PAYMENT_ERROR:
		case PAYMENT_UPDATE_FAIL:
		case GET_TRANSACTION_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};

		default:
			return state;
	}
}
