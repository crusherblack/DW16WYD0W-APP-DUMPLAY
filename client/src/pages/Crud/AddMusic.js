import React, { useState } from 'react';
import '../css/Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import { add_Music } from '../../redux/actions/music';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const AddMovie = ({ add_Music, film }) => {
	const [ previewSrc, setPreviewSrc ] = useState(null);

	let history = useHistory();

	const [ formData, setFormData ] = useState({
		title: '',
		year: '',
		thumbnail: '',
		singerId: '',
		attache: null
	});

	const onChange = (event) => {
		const updateForm = { ...formData };
		updateForm[event.target.name] =
			event.target.type === 'file' ? event.target.files[0] : event.target.value;
		setFormData(updateForm);
	};

	const { title, year } = formData;

	const redirect = () => {
		history.push(`/`);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		//add_Music(formData, redirect);
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
							<option value="1">TV Series</option>
							<option value="2">Movie</option>
						</select>
					</div>
					<div className="form-group">
						<input
							type="file"
							className="custom-select"
							onChange={(e) => {
								onChange(e);
							}}
							name="attache"
						/>
					</div>

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
		</div>
	);
};

AddMovie.propTypes = {
	add_Music: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	film: state.film
});

export default connect(mapStateToProps, { add_Music })(AddMovie);
