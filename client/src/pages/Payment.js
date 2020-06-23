import React, { useRef, useState } from 'react';
import './css/Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { API } from '../config/api';
import { uploadBukti } from '../redux/actions/payment';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Payment = ({ uploadBukti, auth: { user } }) => {
	const [ formData, setFormData ] = useState({
		accountNumber: ''
	});

	const [ previewSrc, setPreviewSrc ] = useState(null);
	const [ file, setFile ] = useState(null);

	const { accountNumber } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onChangeFiles = (e) => {
		let fileInfo = e.target.files[0];
		setFile(fileInfo);
		let reader = new FileReader();

		if (e.target.files.length === 0) {
			return;
		}

		reader.onloadend = (e) => {
			setPreviewSrc([ reader.result ]);
		};

		reader.readAsDataURL(fileInfo);
	};

	const clearForm = () => {
		setFormData({
			accountNumber: ''
		});
		setPreviewSrc(null);
	};

	const onSubmit = (e) => {
		const userId = user.id;
		e.preventDefault();
		uploadBukti(file, userId, clearForm);
	};

	const inputFileRef = useRef(null);

	const onBtnClick = () => {
		inputFileRef.current.click();
	};

	return (
		<div className="payment-container">
			<div className="payment-details">
				<div className="payment-desc">
					<h1
						style={{
							marginBottom: '60px'
						}}
					>
						Premium
					</h1>
					<p>
						Bayar sekarang dan nikmati streaming film-film yang kekinian dari{' '}
						<span className="red">DUMBPLAY </span> <br />{' '}
						<span className="red">DUMBPLAY </span> : 0981312323
					</p>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className="form-payment">
							<div className="form-group">
								<input
									type="text"
									name="accountNumber"
									value={accountNumber}
									className="custom-input"
									placeholder="Input Your Account Number"
									onChange={(e) => onChange(e)}
								/>
							</div>
							<div className="form-group">
								<button
									type="button"
									onClick={() => onBtnClick()}
									className="btn-light"
									style={{
										width: '100%',
										height: '50px',
										fontSize: '18px',
										textAlign: 'left',
										padding: '0 10px'
									}}
								>
									Attach proof of transfer{' '}
									<div
										style={{
											float: 'right',
											display: 'inline',
											fontSize: '20px'
										}}
									>
										<FontAwesomeIcon icon={faPaperclip} />
									</div>
								</button>
								<input
									onChange={(e) => onChangeFiles(e)}
									type="file"
									name="file"
									ref={inputFileRef}
									style={{ display: 'none' }}
								/>
								<img src={previewSrc} className="preview-src" />
							</div>

							<div className="form-group">
								<button
									type="submit"
									className="button"
									style={{
										height: '35px',
										fontSize: '16px',
										marginTop: '25px'
									}}
								>
									Kirim
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

Payment.propTypes = {
	uploadBukti: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { uploadBukti })(Payment);
