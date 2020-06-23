import React, { useEffect, useState } from 'react';

import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';

import { heroImage1 } from '../fakedata/heroimage';

import { connect } from 'react-redux';
import { getFilmsMovies, getFilmsTVSeries } from '../redux/actions/film';
import PropTypes from 'prop-types';

import HomeSkeleton from '../components/Skeleton/HomeSkeleton';

const Home = ({
	getFilmsMovies,
	getFilmsTVSeries,
	films: { filmsMovies, filmsTVSeries, loading }
}) => {
	const [ loadingSkeleton, setLoadingSkeleton ] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingSkeleton(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	useEffect(
		() => {
			getFilmsMovies(6);
			getFilmsTVSeries(6);
		},
		[ getFilmsMovies, getFilmsTVSeries ]
	);

	return loadingSkeleton || loading ? (
		<div>
			<HomeSkeleton />
		</div>
	) : (
		<div>
			<HeroImage heroImage={heroImage1} />
			<MovieGrid title="TV Series" films={filmsTVSeries} />
			<MovieGrid title="Movies" films={filmsMovies} />
		</div>
	);
};

Home.propTypes = {
	getFilmsMovies: PropTypes.func.isRequired,
	getFilmsTVSeries: PropTypes.func.isRequired,
	films: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	films: state.film
});

export default connect(mapStateToProps, { getFilmsMovies, getFilmsTVSeries })(Home);
