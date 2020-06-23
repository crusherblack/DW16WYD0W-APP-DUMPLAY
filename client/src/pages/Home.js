import React, { useEffect, useState } from 'react';

import HeroImage from '../components/HeroImage/HeroImage';
import CardGrid from '../components/CardGrid/CardGrid';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

import { connect } from 'react-redux';
import { getMusicAll } from '../redux/actions/music';
import PropTypes from 'prop-types';

import Loader from '../components/Loader/Loader';

const Home = ({
	getMusicAll,
	music: { musicAll },
	auth: { isAuthenticated, user, loading }
}) => {
	const [ playIndex, setPlayIndex ] = useState(0);
	const [ loadingSkeleton, setLoadingSkeleton ] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingSkeleton(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(
		() => {
			getMusicAll(24);
		},
		[ getMusicAll ]
	);

	return loadingSkeleton || loading ? (
		<div>
			<Loader />
		</div>
	) : (
		<div>
			<HeroImage />
			<CardGrid
				title="Dengarkan dan Rasakan"
				films={musicAll}
				setPlayIndex={setPlayIndex}
				playIndex={playIndex}
			/>

			{user === null ? null : (isAuthenticated && user.subscribe) ||
			(isAuthenticated && user.role === 1) ? (
				<MusicPlayer
					musicAll={musicAll}
					playIndex={playIndex}
					setPlayIndex={setPlayIndex}
				/>
			) : null}
		</div>
	);
};

Home.propTypes = {
	getMusicAll: PropTypes.func.isRequired,

	music: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	music: state.music,
	auth: state.auth
});

export default connect(mapStateToProps, { getMusicAll })(Home);
