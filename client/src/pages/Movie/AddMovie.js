import React, { useState } from 'react';
import '../css/Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { styles } from './Styles';
import { addFilm } from '../../redux/actions/film';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const AddMovie = ({ addFilm, film }) => {
	const [ previewSrc, setPreviewSrc ] = useState(null);

	let history = useHistory();
	const [ episodes, setEpisodes ] = React.useState([
		{ titleEpisode: '', attachThumbnail: '', linkFilm: '' }
	]);

	const [ formData, setFormData ] = useState({
		title: '',
		year: '',
		description: '',
		categoryId: '',
		thumbnailFilm: null,
		urlMovie: ''
	});

	const onChange = (event) => {
		const updateForm = { ...formData };
		updateForm[event.target.name] =
			event.target.type === 'file' ? event.target.files[0] : event.target.value;
		setFormData(updateForm);
	};

	const { title, year, description, urlMovie, thumbnailFilm, categoryId } = formData;

	const addRate = () => {
		setEpisodes([
			...episodes,
			{ titleEpisode: '', attachThumbnail: '', linkFilm: '' }
		]);
	};

	const handleChange = (event) => {
		const updateForm = [ ...episodes ];
		updateForm[event.target.dataset.id][event.target.className] =
			event.target.type === 'file' ? event.target.files[0] : event.target.value;
		setEpisodes(updateForm);
	};

	const redirectToMovieList = () => {
		history.push(`/movie-list`);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		let payload = {};
		if (categoryId === '1') {
			payload = {
				title,
				year,
				categoryId,
				description,
				thumbnailFilm,
				episodes
			};
		} else if (categoryId === '2') {
			payload = {
				title,
				year,
				categoryId,
				description,
				urlMovie,
				thumbnailFilm
			};
		}

		addFilm(payload, redirectToMovieList);

		console.log(payload);
	};

	const onChangeFiles = (e) => {
		let fileInfo = e.target.files[0];

		let reader = new FileReader();

		if (e.target.files.length === 0) {
			return;
		}

		reader.onloadend = (e) => {
			setPreviewSrc([ reader.result ]);
		};

		reader.readAsDataURL(fileInfo);
	};

	return (
		<div className="container">
			<form onSubmit={(e) => onSubmit(e)}>
				<div className="list-movie">
					<h2>Add Film</h2>
					<br />
					<div className="satuline">
						<div className="form-group">
							<input
								type="text"
								className="custom-input"
								placeholder="Title"
								style={{
									width: '160%'
								}}
								onChange={(e) => onChange(e)}
								value={title}
								name="title"
								required
							/>
						</div>
						<div className="form-group">
							<button
								type="button"
								onClick={() => {
									document
										.getElementsByName('thumbnailFilm')[0]
										.click();
								}}
								className="btn-grey"
								style={{
									width: '40%',
									height: '50px',
									fontSize: '18px',
									textAlign: 'left',
									float: 'right'
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
							<input
								type="file"
								style={{ display: 'none' }}
								onChange={(e) => {
									onChange(e);
									onChangeFiles(e);
								}}
								name="thumbnailFilm"
							/>
						</div>
					</div>
					<div className="form-group">
						<input
							type="number"
							className="custom-input"
							placeholder="Year"
							onChange={(e) => onChange(e)}
							value={year}
							name="year"
							required
						/>
					</div>
					<div className="form-group">
						<select
							name="categoryId"
							className="custom-select"
							onChange={(e) => {
								onChange(e);
							}}
							required
						>
							<option value="">Category</option>
							<option value="1">TV Series</option>
							<option value="2">Movie</option>
						</select>
					</div>
					<div className="form-group">
						<textarea
							type="text"
							className="custom-textarea"
							onChange={(e) => onChange(e)}
							value={description}
							name="description"
							required
						/>
					</div>
					{categoryId === '2' ? (
						<div className="form-group">
							<input
								type="text"
								className="custom-input"
								placeholder="Url / Link Film"
								onChange={(e) => onChange(e)}
								value={urlMovie}
								name="urlMovie"
							/>
						</div>
					) : null}

					{categoryId === '1' ? (
						<div>
							<div onChange={handleChange}>
								{episodes.map((row, index) => {
									const titleEpisodeId = `title-${index}`,
										attachThumbnailId = `attach-${index}`,
										linkFilmId = `link-${index}`;

									return (
										<div key={index} style={{ marginTop: '3rem' }}>
											<div className="form-group">
												<div
													style={{
														display: 'grid',
														gridTemplateColumns:
															'repeat(2, 1fr)',
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
														required
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
														type="button"
														className="btn-grey"
														onClick={() => {
															document
																.getElementsByName(
																	attachThumbnailId
																)[0]
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
															<FontAwesomeIcon
																icon={faPaperclip}
															/>
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
													placeholder="Link Film"
													style={styles.customInput}
													required
												/>
											</div>
										</div>
									);
								})}
								<div className="form-group">
									<button
										type="button"
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
							</div>
						</div>
					) : null}

					<div className="form-group">
						<button
							type="submit"
							className="btn-merah"
							style={{
								width: '10em',
								float: 'right',
								position: 'relative'
							}}
						>
							Save
						</button>
					</div>
				</div>
			</form>
			<div className="preview-container">
				<h1>Thumbnail Film</h1>
				<img src={previewSrc} className="preview-film" />
			</div>
			<div className="preview-container">
				<h1>Thumbnail Episode</h1>
				<ul>
					{episodes.map((episode, index) => (
						<li key={index}>{episode.attachThumbnail.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

AddMovie.propTypes = {
	addFilm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	film: state.film
});

export default connect(mapStateToProps, { addFilm })(AddMovie);
