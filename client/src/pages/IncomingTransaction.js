import React, { useEffect } from 'react';
import './css/Transcation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { getTransaction, updatePayment } from '../redux/actions/payment';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const IncomingTransaction = ({
	getTransaction,
	updatePayment,
	payment: { transaction, loading }
}) => {
	let dateNow = dayjs();
	let now = dateNow.format('YYYY-MM-DD');

	useEffect(
		() => {
			getTransaction();
		},
		[ getTransaction ]
	);

	const handleUpdate = (status, idTransaction, idUser) => {
		updatePayment(status, idTransaction, idUser);
	};

	const data = transaction.map((data, index) => {
		let due_Date = dayjs(data.userInfo.dueDate);
		return (
			<tr key={data.id}>
				<td>{index + 1}</td>
				<td>{data.userInfo.fullName}</td>
				<td>
					<img
						style={{ width: '50px', height: '50px', cursor: 'pointer' }}
						src={`http://localhost:5000/uploads/${data.attache}`}
						alt="data"
					/>
				</td>
				<td>
					{due_Date.diff(now, 'day') > 0 ? due_Date.diff(now, 'day') : 0} Days
				</td>
				<td
					style={{
						color: data.userInfo.subscribe ? '#0ACF83' : '#FF0742'
					}}
				>
					{data.userInfo.subscribe ? 'Active' : 'Not Active'}
				</td>
				<td
					style={{
						color:
							data.status == 'Approved'
								? '#0ACF83'
								: data.status == 'Pending' ? '#F7941E' : '#FF0742'
					}}
				>
					{data.status}
				</td>
				<td>
					<span
						style={{
							fontSize: '20px',
							cursor: 'pointer',
							color: '#1C9CD2'
						}}
					>
						{data.status === 'Approved' || data.status === 'Reject' ? null : (
							<div className="dropdown">
								<div className="dropdown-content">
									<label htmlFor="">
										<ul>
											<li
												style={{ color: '#0ACF83' }}
												onClick={() =>
													handleUpdate(
														'Approved',
														data.id,
														data.userInfo.id
													)}
											>
												Aktifasi
											</li>
											<li
												style={{ color: 'red' }}
												onClick={() =>
													handleUpdate(
														'Reject',
														data.id,
														data.userInfo.id
													)}
											>
												Reject
											</li>
										</ul>
									</label>
								</div>
								<FontAwesomeIcon icon={faCaretDown} />
							</div>
						)}
					</span>
				</td>
			</tr>
		);
	});

	return (
		<div className="transcation-container">
			<h1>Incoming Transcation</h1>
			<table className="transcation-table">
				<thead>
					<tr>
						<th>No</th>
						<th>Users</th>
						<th>Bukti Transfer</th>
						<th>Remaining Aktif</th>
						<th>Status User</th>
						<th>Status Payment</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</table>
		</div>
	);
};

IncomingTransaction.propTypes = {
	getTransaction: PropTypes.func.isRequired,
	payment: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	payment: state.payment
});

export default connect(mapStateToProps, { getTransaction, updatePayment })(
	IncomingTransaction
);
