import React from 'react';
import './HeroImage.css';

const HeroImage = ({ heroImage: { img, logo, desc, year, type } }) => {
	return (
		<div
			className="hero"
			style={{
				background: `linear-gradient(to bottom, rgba(0,0, 0, 0), black), url('${img}'), #1c1c1c`
			}}
		>
			<div className="hero-content">
				<div className="hero-text">
					<img src={logo} alt="logohero" className="logohero" />
					<p>{desc}</p>
					<p>
						<span className="year">{year}</span>
						<span className="tipe">{type}</span>
					</p>

					<button className="hero-button">WATCH NOW !</button>
				</div>
			</div>
		</div>
	);
};

export default HeroImage;
