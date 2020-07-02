import React, { useEffect } from 'react';
import './css/Profile.css';
import avatar from '../img/person.jpg';
import { changeProfile } from '../redux/actions/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faEnvelope,
	faMoneyBillAlt,
	faTransgender,
	faPhone,
	faAddressBook
} from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Profile = ({ auth: { user }, changeProfile }) => {
	const { fullName, email, gender, phone, address, subscribe, profile } = user;

	return (
		<div className="profile-container">
			<div className="profile-card">
				<div className="profile-desc">
					<div className="profile-data">
						<h2>Profile Info</h2>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faUser} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{fullName}
							</span>
							<span>Fullname</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{email}
							</span>
							<span>Email</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faMoneyBillAlt} />
						</div>
						<div className="profile-details">
							<span
								style={{
									fontSize: '18px',
									fontWeight: 'bold',
									color: subscribe ? 'green' : 'red'
								}}
							>
								{subscribe ? 'Active' : 'Not Active Please Subscribe'}
							</span>
							<span>Status</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faTransgender} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{gender}
							</span>
							<span>Gender</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faPhone} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{phone}
							</span>
							<span>Phone</span>
						</div>
					</div>
					<div className="profile-data">
						<div className="profile-icon">
							<FontAwesomeIcon icon={faAddressBook} />
						</div>
						<div className="profile-details">
							<span style={{ fontSize: '18px', fontWeight: 'bold' }}>
								{address}
							</span>
							<span>Address</span>
						</div>
					</div>
				</div>
				<div className="profile-img">
					<img
						src={
							profile === '' ? (
								avatar
							) : (
								`http://localhost:5000/uploads/${profile}`
							)
						}
						alt="avatar"
						className="profile-avatar"
					/>
					<button
						className="profile-button"
						onClick={() => {
							document.getElementsByName('attache')[0].click();
						}}
					>
						Change Photo Profile
					</button>
					<input
						type="file"
						style={{ display: 'none' }}
						placeholder="Link Music"
						onChange={(e) => {
							let file = e.target.files[0];
							changeProfile(file);
						}}
						name="attache"
						required
					/>
				</div>
			</div>
		</div>
	);
};

Profile.propTypes = {
	changeProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { changeProfile })(Profile);
