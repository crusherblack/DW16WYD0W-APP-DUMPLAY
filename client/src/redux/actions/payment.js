import { API } from '../../config/api';
import moment from 'moment';

import {
	PAYMENT_ERROR,
	PAYMENT_SUCCESS,
	GET_TRANSACTION_SUCCESS,
	GET_TRANSACTION_ERROR,
	PAYMENT_UPDATE_SUCCES,
	PAYMENT_UPDATE_FAIL
} from './types';

//Get All Films
export const uploadBukti = (file, idUser, clearForm) => async (dispatch) => {
	try {
		const formData = new FormData();

		formData.append('startDate', moment());
		formData.append('dueDate', moment());
		formData.append('userId', idUser);
		formData.append('attache', file);
		formData.append('status', 'Pending');

		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		};

		await API.post('/transaction', formData, config);

		dispatch({
			type: PAYMENT_SUCCESS
		});
		clearForm();
	} catch (e) {
		dispatch({
			type: PAYMENT_ERROR
		});
	}
};

export const getTransaction = () => async (dispatch) => {
	try {
		const res = await API.get('/transaction');

		dispatch({
			type: GET_TRANSACTION_SUCCESS,
			payload: res.data.data
		});
	} catch (e) {
		dispatch({
			type: GET_TRANSACTION_ERROR
		});
	}
};

export const updatePayment = (status, idTranscation, idUser) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({
		status,
		idUser
	});

	try {
		const res = await API.patch(`/transaction/${idTranscation}`, body, config);
		dispatch({
			type: PAYMENT_UPDATE_SUCCES,
			payload: res.data.data.resultTransaction
		});
	} catch (err) {
		dispatch({
			type: PAYMENT_UPDATE_FAIL,
			payload: err.response.data.error.message
		});
	}
};
