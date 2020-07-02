import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faMoneyCheck,
	faEdit,
	faPowerOff,
	faMusic,
	faUserAlt,
	faCogs
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

import { handleLogout } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProfileDropdown = ({
	showProfileDropdown,
	handleLogout,
	auth: { user: { fullName, email, role } }
}) => {
	let history = useHistory();

	const openProfile = () => {
		history.push(`/profile`);
		showProfileDropdown();
	};

	const openPayment = () => {
		history.push(`/payment`);
		showProfileDropdown();
	};

	const openTranscation = () => {
		history.push(`/transaction`);
		showProfileDropdown();
	};

	const setLogout = () => {
		handleLogout();
		showProfileDropdown();
	};

	return (
		<div>
			<div className="profile-square">
				<div className="profile-arrow" />
				<div className="profile-dropdown-group">
					<div className="profile-dropdown-icon">
						<FontAwesomeIcon icon={faCogs} className="icon" />
					</div>
					<div className="profile-dropdown-link">
						<span className="submenu" onClick={() => openProfile()}>
							Profile
						</span>
					</div>
				</div>
				{role === 2 ? (
					<div>
						<div className="profile-dropdown-group">
							<div className="profile-dropdown-icon">
								<FontAwesomeIcon icon={faMoneyCheck} className="icon" />
							</div>
							<div className="profile-dropdown-link">
								<span className="submenu" onClick={() => openPayment()}>
									Pay
								</span>
							</div>
						</div>
					</div>
				) : null}
				{role === 1 ? (
					<div>
						<div className="profile-dropdown-group">
							<div className="profile-dropdown-icon">
								<FontAwesomeIcon icon={faEdit} className="icon" />
							</div>
							<div className="profile-dropdown-link">
								<span
									className="submenu"
									onClick={() => openTranscation()}
								>
									Transcation
								</span>
							</div>
						</div>

						<div className="profile-dropdown-group">
							<div className="profile-dropdown-icon">
								<FontAwesomeIcon icon={faMusic} className="icon" />
							</div>
							<div className="profile-dropdown-link">
								<span
									className="submenu"
									onClick={() => {
										history.push(`/add-music`);
										showProfileDropdown();
									}}
								>
									Add Music
								</span>
							</div>
						</div>

						<div className="profile-dropdown-group">
							<div className="profile-dropdown-icon">
								<FontAwesomeIcon icon={faUserAlt} className="icon" />
							</div>
							<div className="profile-dropdown-link">
								<span
									className="submenu"
									onClick={() => {
										history.push(`/add-artist`);
										showProfileDropdown();
									}}
								>
									Add Artist
								</span>
							</div>
						</div>
					</div>
				) : null}

				<hr style={{ marginBottom: '18px' }} />
				<div className="profile-dropdown-group">
					<div className="profile-dropdown-icon">
						<FontAwesomeIcon icon={faPowerOff} className="icon" />
					</div>
					<div className="profile-dropdown-link">
						<span className="submenu" onClick={() => setLogout()}>
							LogOut
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

ProfileDropdown.propTypes = {
	handleLogout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { handleLogout })(ProfileDropdown);
