import React, { useState, useEffect } from 'react';
import '../css/Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import { add_Music } from '../../redux/actions/music';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { getArtistAll } from '../../redux/actions/music';

const AddMovie = ({ getArtistAll, add_Music, music: { artisAll, loading } }) => {
	const [ previewSrc, setPreviewSrc ] = useState(null);

	useEffect(() => {
		getArtistAll();
	}, []);

	let history = useHistory();

	const [ formData, setFormData ] = useState({
		title: '',
		year: '',
		thumbnail: '',
		singerId: '',
		attache: ''
	});

	const onChange = (event) => {
		const updateForm = { ...formData };
		updateForm[event.target.name] =
			event.target.type === 'file' ? event.target.files[0] : event.target.value;
		setFormData(updateForm);
	};

	const { title, year, attache } = formData;

	const redirect = () => {
		history.push(`/`);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		add_Music(formData, redirect);
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
					<h2>Add Music</h2>
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
									document.getElementsByName('thumbnail')[0].click();
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
								{previewSrc ? 'Change Thumbnail' : 'Attach Thumbnail'}
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
								name="thumbnail"
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
							name="singerId"
							className="custom-select"
							onChange={(e) => {
								onChange(e);
							}}
							required
						>
							<option value="">Select Artist</option>
							{artisAll == null || loading ? (
								'loading'
							) : (
								artisAll.map((artis) => (
									<option value={artis.id} key={artis.id}>
										{artis.name}
									</option>
								))
							)}
						</select>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="custom-input"
							placeholder="Link Music"
							onChange={(e) => onChange(e)}
							value={attache}
							name="attache"
							required
						/>
					</div>
					<div className="preview-container">
						<h1>Thumbnail Music</h1>
						<img src={previewSrc} className="preview-film" />
					</div>
					<div
						className="form-group"
						style={{
							textAlign: 'center'
						}}
					>
						<button
							type="submit"
							className="btn-merah"
							style={{
								marginTop: '1em',
								maxWidth: '25rem',
								position: 'relative'
							}}
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

AddMovie.propTypes = {
	add_Music: PropTypes.func.isRequired,
	getArtistAll: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	film: state.film,
	music: state.music
});

export default connect(mapStateToProps, { add_Music, getArtistAll })(AddMovie);
