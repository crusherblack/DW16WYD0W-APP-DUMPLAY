import React, { useEffect, useState } from 'react';

import HeroImage from '../components/HeroImage/HeroImage';
import CardGrid from '../components/CardGrid/CardGrid';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

import { connect } from 'react-redux';
import { getMusicAll } from '../redux/actions/music';
import PropTypes from 'prop-types';

import HomeSkeleton from '../components/Skeleton/HomeSkeleton';

const Home = ({ getMusicAll, music: { musicAll, loading } }) => {
	const [ playIndex, setPlayIndex ] = useState(0);
	const [ loadingSkeleton, setLoadingSkeleton ] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingSkeleton(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	useEffect(
		() => {
			getMusicAll(12);
		},
		[ getMusicAll ]
	);

	return loadingSkeleton || loading ? (
		<div>
			<HomeSkeleton />
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
			<MusicPlayer
				musicAll={musicAll}
				playIndex={playIndex}
				setPlayIndex={setPlayIndex}
			/>
		</div>
	);
};

Home.propTypes = {
	getMusicAll: PropTypes.func.isRequired,

	music: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	music: state.music
});

export default connect(mapStateToProps, { getMusicAll })(Home);
