import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ films, title }) => {
	const list = films.map((movie) => <MovieCard movie={movie} key={movie.id} />);

	return (
		<div className="movie-grid">
			<div className="movie-type">
				<label> {title} </label>
			</div>
			<div className="movie-list">{list} </div>
		</div>
	);
};

export default MovieGrid;
