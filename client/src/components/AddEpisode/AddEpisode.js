import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { styles } from './Styles';

const AddEpisode = () => {
	const [ rates, setRates ] = React.useState([
		{ titleEpisode: '', attachThumbnail: '', linkFilm: '' }
	]);

	const addRate = () => {
		setRates([ ...rates, { titleEpisode: '', attachThumbnail: '', linkFilm: '' } ]);
	};

	const handleChange = (event) => {
		const updateForm = [ ...rates ];
		updateForm[event.target.dataset.id][event.target.className] = event.target.value;
		setRates(updateForm);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit} onChange={handleChange}>
				{rates.map((row, index) => {
					const titleEpisodeId = `title-${index}`,
						attachThumbnailId = `attach-${index}`,
						linkFilmId = `link-${index}`;

					return (
						<div key={index} style={{ marginTop: '3rem' }}>
							<div className="form-group">
								<div
									style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(2, 1fr)',
										gridGap: '1rem'
									}}
								>
									<input
										type="text"
										name={titleEpisodeId}
										data-id={index}
										id={titleEpisodeId}
										className="titleEpisode"
										placeholder="Title Episode"
										style={styles.customInputTitle}
									/>
									<input
										type="file"
										name={attachThumbnailId}
										data-id={index}
										id={attachThumbnailId}
										className="attachThumbnail"
										style={styles.customInputFile}
									/>
									<button
										className="btn-grey"
										onClick={() => {
											document
												.getElementsByName(attachThumbnailId)[0]
												.click();
										}}
										style={{
											width: '40%',
											height: '50px',
											fontSize: '18px',
											textAlign: 'left',
											float: 'right',
											justifySelf: 'right'
										}}
									>
										Attach Thumbnail{' '}
										<div
											style={{
												float: 'right',
												display: 'inline',
												fontSize: '20px'
											}}
										>
											<FontAwesomeIcon icon={faPaperclip} />
										</div>
									</button>
								</div>
							</div>
							<div className="form-group">
								<input
									type="text"
									name={linkFilmId}
									data-id={index}
									id={linkFilmId}
									className="linkFilm"
									placeholder="Lik Film"
									style={styles.customInput}
								/>
							</div>
						</div>
					);
				})}
				<div className="form-group">
					<button
						className="btn-grey"
						style={{
							width: '100%',
							height: '50px',
							color: '#e50914'
						}}
						onClick={addRate}
					>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddEpisode;
