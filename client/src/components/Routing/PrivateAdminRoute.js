import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateAdminRoute = ({
	component: Component,
	auth: { isAuthenticated, user, loading },
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated === null || loading ? (
					<div>Loading...</div>
				) : isAuthenticated && user.role == 1 ? (
					<Component {...props} />
				) : isAuthenticated && user.role !== 1 ? (
					<Redirect to="/" />
				) : (
					<Redirect to="/" />
				)}
		/>
	);
};
PrivateAdminRoute.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {})(PrivateAdminRoute);
