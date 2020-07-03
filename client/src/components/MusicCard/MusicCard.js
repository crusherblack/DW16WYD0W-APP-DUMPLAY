import React from 'react';
import { useHistory } from 'react-router-dom';
import './MusicCard.css';
import playIcon from '../../img/iconplay.png';

const MusicCard = ({
	movie: { id, title, year, artis: { name }, thumbnail },
	setPlayIndex,
	index,
	playIndex
}) => {
	const text_truncate = (str, length, ending) => {
		if (length == null) {
			length = 100;
		}
		if (ending == null) {
			ending = '...';
		}
		if (str.length > length) {
			return str.substring(0, length - ending.length) + ending;
		} else {
			return str;
		}
	};

	return (
		<div className="card-backround">
			<div className={`playIcon${index === playIndex ? ' current' : ' '}`}>
				<img src={playIcon} alt="playIcon" onClick={() => setPlayIndex(index)} />
			</div>
			<div>
				<img
					className="card"
					src={`http://localhost:5000/uploads/${thumbnail}`}
					onClick={() => setPlayIndex(index)}
				/>
				<span className="movie-title">{text_truncate(title, 15)}</span>
				<span className="movie-kanan">{year}</span>
				<span className="movie-artis">{name}</span>
			</div>
		</div>
	);
};

export default MusicCard;
