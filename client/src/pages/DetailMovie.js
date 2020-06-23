import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailsFilm } from '../redux/actions/film';
import PropTypes from 'prop-types';

import VideoThumbnail from '../components/VideoThumbnail/VideoThumbnail';
import Description from '../components/MovieDetail/Description';
import Episode from '../components/MovieDetail/Episode';
import DetailSkeleton from '../components/Skeleton/DetailSkeleton';
import './css/DetailMovie.css';

import moviesThumbnail from '../img/videothumbnail/video2.png';
import tvThumbnail from '../img/videothumbnail/video1.png';

const DetailMovie = ({
	getDetailsFilm,
	match,
	film: { filmDetails, loading },
	auth: { user }
}) => {
	const [ loadingSkeleton, setLoadingSkeleton ] = useState(true);
	const [ playNow, setPlayNow ] = useState(null);

	const handlePlayNow = (url) => {
		setPlayNow(url);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoadingSkeleton(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	useEffect(
		() => {
			getDetailsFilm(match.params.id);
		},
		[ getDetailsFilm ]
	);

	let history = useHistory();
	let role = 'admin';

	const openAddEpisode = () => {
		history.push('/add-episode');
	};

	return (
		<div>
			{loadingSkeleton || filmDetails === null || loading ? (
				<div>
					<DetailSkeleton />
				</div>
			) : user.subscribe || user.role === 1 ? (
				<div>
					<div style={{ marginTop: '70px' }}>
						<VideoThumbnail
							handlePlayNow={handlePlayNow}
							defaultUrl={filmDetails.episodes[0].linkFilm}
							playNow={playNow}
							thumbnail={
								filmDetails.category.id == 1 ? (
									tvThumbnail
								) : (
									moviesThumbnail
								)
							}
							filmDetails
						/>
						{role == 'admin' && filmDetails.category.id == 1 ? (
							<div
								style={{
									height: '50px',
									position: 'relative'
								}}
							>
								<button
									className="btn-merah"
									style={{
										float: 'right',
										width: '12em',
										top: '1em',
										right: '2em',
										marginBottom: '3em'
									}}
									onClick={() => openAddEpisode()}
								>
									Add Episode
								</button>
							</div>
						) : null}
						<div className="details">
							<Description filmDetails={filmDetails} />

							<Episode
								name={filmDetails.title}
								episodes={filmDetails.episodes}
								handlePlayNow={handlePlayNow}
							/>
						</div>
					</div>
				</div>
			) : (
				<div>
					<div
						style={{
							marginTop: '300px',
							color: 'white',
							textAlign: 'center'
						}}
					>
						<p>Anda belum daftar</p>
						<p
							className="pointer"
							onClick={() => {
								history.push('/payment');
							}}
						>
							Klik disini untuk mendaftar
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

DetailMovie.propTypes = {
	getDetailsFilm: PropTypes.func.isRequired,
	film: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	film: state.film,
	auth: state.auth
});

export default connect(mapStateToProps, { getDetailsFilm })(DetailMovie);
