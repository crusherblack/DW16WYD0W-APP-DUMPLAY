import React, { useState, useEffect, useRef } from 'react';

import Modal from '../Modal/Modal';
import { handleLogin } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Login = ({
	showModalLogin,
	showModalRegister,
	modalLogin,
	handleLogin,
	auth: { error, loading }
}) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const emailField = useRef(null);

	useEffect(() => {
		emailField.current.focus();
	}, []);

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleLogin(email, password, showModalLogin);
	};

	return (
		<div>
			{modalLogin ? (
				<div onClick={() => showModalLogin()} className="back-drop" />
			) : null}

			<Modal className="modal" show={modalLogin}>
				<h1 style={{ marginBottom: '40px' }}>LOGIN</h1>
				{error === null || loading ? (
					''
				) : (
					<p style={{ textTransform: 'capitalize', margin: '0 0' }}>{error}</p>
				)}
				<form onSubmit={(e) => onSubmit(e)}>
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="Email"
							value={email}
							name="email"
							onChange={(e) => onChange(e)}
							ref={emailField}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="custom-input"
							placeholder="Password"
							value={password}
							name="password"
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className="form-group" style={{ marginTop: '50px' }}>
						<button type="submit" className="button">
							Login
						</button>
					</div>
				</form>
				<p style={{ color: '#B1B1B1', fontSize: '18px' }}>
					Don't have an account ? Klik{' '}
					<span
						style={{ fontWeight: '900', cursor: 'pointer' }}
						onClick={() => showModalRegister()}
					>
						Here
					</span>
				</p>
			</Modal>
		</div>
	);
};

Login.propTypes = {
	handleLogin: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { handleLogin })(Login);
