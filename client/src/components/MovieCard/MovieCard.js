import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie: { id, title, year, thumbnailFilm, category } }) => {
	let history = useHistory();

	return (
		<div>
			<img
				className="card"
				src={`http://localhost:5000/uploads/${thumbnailFilm}`}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = thumbnailFilm;
				}}
				onClick={() => history.push(`/detail/${id}`)}
				style={{ height: 'auto' }}
			/>
			<span className="movie-title">{title}</span>
			<span className="movie-year">{year}</span>
		</div>
	);
};

export default MovieCard;
