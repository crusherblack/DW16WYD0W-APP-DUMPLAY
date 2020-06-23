var multer = require('multer');

exports.upload = (fileName) => {
	var storage = multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, 'uploads');
		},
		filename: function(req, file, cb) {
			cb(null, Date.now() + '-' + file.originalname);
		}
	});

	const filter = function(req, file, cb) {
		if (!file.originalname.match(/\.(mp3|MP3)$/)) {
			req.fileValidationError = {
				message: 'Only MP3 files are allowed!'
			};
			return cb(new Error('Only MP3 files are allowed!'), false);
		}
		cb(null, true);
	};

	const maxSize = 10 * 1000 * 1000;

	const upload = multer({
		storage,
		fileFilter: filter,
		limits: {
			fileSize: maxSize
		}
	}).single(fileName);

	return (req, res, next) => {
		upload(req, res, function(err) {
			if (req.fileValidationError)
				return res.status(400).send(req.fileValidationError);

			if (!req.file && !err)
				return res.status(400).send({
					message: 'Please select an music file to upload'
				});

			if (err) {
				if (err.code === 'LIMIT_FILE_SIZE') {
					return res.status(400).send({
						message: 'Max file sized 10MB'
					});
				}
				return res.status(400).send(err);
			}

			return next();
		});
	};
};
