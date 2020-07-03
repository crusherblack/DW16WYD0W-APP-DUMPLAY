import React, { useState } from 'react';
import './Navbar.css';

import logo from '../../img/logoplay.png';
import person from '../../img/person.jpg';
import ProfileDropdown from '../Profile/ProfileDropdown';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

const Navbar = ({
	showModalLogin,
	showModalRegister,
	auth: { isAuthenticated, loading, user }
}) => {
	let history = useHistory();

	const [ isProfileDropdown, setProfileDropdown ] = useState(false);

	const showProfileDropdown = () => {
		setProfileDropdown(!isProfileDropdown);
	};

	const openHome = () => {
		history.push(`/`);
	};

	return (
		<div className="navbar">
			<div className="logo">
				<img
					src={logo}
					alt="dumbflix"
					style={{ cursor: 'pointer' }}
					onClick={() => openHome()}
				/>
			</div>

			{!isAuthenticated && (
				<div className="button-login-register">
					<button className="btn-light" onClick={() => showModalRegister()}>
						Register
					</button>
					<button className="btn-red" onClick={() => showModalLogin()}>
						Login
					</button>
				</div>
			)}

			{user === null || loading ? (
				<div>Loading...</div>
			) : (
				isAuthenticated && (
					<div className="profile">
						<img
							src={
								user.profile === '' ? (
									person
								) : (
									`http://localhost:5000/uploads/${user.profile}`
								)
							}
							alt="person"
							onClick={() => showProfileDropdown()}
						/>
					</div>
				)
			)}
			{isProfileDropdown && (
				<ProfileDropdown showProfileDropdown={showProfileDropdown} />
			)}
		</div>
	);
};

Navbar.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {})(Navbar);
