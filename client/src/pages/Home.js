import React, { useEffect, useState } from 'react';

import HeroImage from '../components/HeroImage/HeroImage';
import CardGrid from '../components/CardGrid/CardGrid';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

import { connect } from 'react-redux';
import { getMusicAll, loadMore } from '../redux/actions/music';
import PropTypes from 'prop-types';

import Loader from '../components/Loader/Loader';

const Home = ({
	getMusicAll,
	loadMore,
	music: { musicAll, paginationInfo, loading: musicLoading },
	auth: { isAuthenticated, user, loading }
}) => {
	const [ queryTitle, setQueryTitle ] = useState('');
	const [ playIndex, setPlayIndex ] = useState(0);
	const [ loadingSkeleton, setLoadingSkeleton ] = useState(true);

	useEffect(
		() => {
			const timer = setTimeout(() => {
				getMusicAll(1, queryTitle);
			}, 300);

			return () => clearTimeout(timer);
		},
		[ queryTitle ]
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingSkeleton(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const newAuth = { isAuthenticated, loading };

	return loadingSkeleton ||
	loading ||
	musicLoading ||
	musicAll === null ||
	paginationInfo === null ? (
		<div>
			<Loader />
		</div>
	) : (
		<div>
			<HeroImage />
			<CardGrid
				title="Dengarkan dan Rasakan"
				musics={musicAll}
				setPlayIndex={setPlayIndex}
				playIndex={playIndex}
				auth={newAuth}
				paginationInfo={paginationInfo}
				loadMore={loadMore}
				setQueryTitle={setQueryTitle}
				queryTitle={queryTitle}
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

export default connect(mapStateToProps, { getMusicAll, loadMore })(Home);
