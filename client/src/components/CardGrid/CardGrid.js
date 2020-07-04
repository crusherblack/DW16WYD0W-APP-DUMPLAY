import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Waypoint } from 'react-waypoint';

import MovieCard from '../MusicCard/MusicCard';
import './CardGrid.css';

const CardGrid = ({
	musics,
	setPlayIndex,
	playIndex,
	auth,
	paginationInfo,
	queryTitle,
	setQueryTitle,
	loadMore
}) => {
	const lengthData = 12;
	const lengthLoadMore = lengthData - 1;
	const [ loadMoreIndex, setLoadMoreIndex ] = useState(lengthLoadMore);
	const list = musics.map((movie, index) => (
		<div key={index}>
			<MovieCard
				movie={movie}
				key={movie.id}
				setPlayIndex={setPlayIndex}
				index={index}
				playIndex={playIndex}
				auth={auth}
			/>
			{index === loadMoreIndex && (
				<Waypoint
					onEnter={() => {
						loadMore(paginationInfo.currentPage + 1, queryTitle);
						setLoadMoreIndex(loadMoreIndex + lengthLoadMore);
						console.log(index);
					}}
				/>
			)}
		</div>
	));

	return (
		<div className="movie-grid">
			<div className="search">
				<input
					type="text"
					className="searchTerm"
					placeholder="Cari lagu favorite anda disini..."
					value={queryTitle}
					onChange={(e) => setQueryTitle(e.target.value)}
				/>
				<button type="submit" className="searchButton">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>

			<div className="movie-list">{list} </div>
			{/* 	{paginationInfo.totalData <= musics.length ? null : (
				<button
					onClick={() => {
						loadMore(paginationInfo.currentPage + 1, queryTitle);
					}}
					className="btn-loadmore"
				>
					LOAD MORE
				</button>
			)} */}
		</div>
	);
};

export default CardGrid;
