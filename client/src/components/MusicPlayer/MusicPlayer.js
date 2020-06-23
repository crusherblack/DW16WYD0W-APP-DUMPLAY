import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import './MusicPlayer.css';

const MusicPlayer = ({ musicAll, playIndex, setPlayIndex }) => {
	const playlist = musicAll.map((music) => ({
		name: music.title,
		singer: music.artis.name,
		cover: `http://localhost:5000/uploads/${music.thumbnail}`,
		musicSrc: music.attache
	}));

	return (
		<div
			style={{
				height: '100px',
				width: '100%'
			}}
		>
			<ReactJkMusicPlayer
				mode="full"
				audioLists={playlist}
				defaultPlayIndex={0}
				autoPlay={false}
				showDownload={false}
				showThemeSwitch={false}
				toggleMode={false}
				responsive={false}
				glassBg={true}
				playIndex={playIndex}
				onAudioPlay={(audioInfo) => {
					if (playIndex === audioInfo.playIndex) {
						return;
					}
					setPlayIndex(audioInfo.playIndex);
				}}
			/>
			,
		</div>
	);
};

export default MusicPlayer;
