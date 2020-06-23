import React from 'react';
import './HeroImage.css';
import img from '../../img/videothumbnail/music.png';

const HeroImage = () => {
	return (
		<div>
			<div
				className="hero"
				style={{
					height: '70vh',
					background: `url('${img}'), #1c1c1c`
				}}
			/>
			<div className="hero-content">
				<div className="hero-text">
					<h1>Connect on DumbSound</h1>
					<p>
						Discovery, Stream, and share a constantly expanding mix of music{' '}
						<br />
						from emerging and major artists around the world
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroImage;
