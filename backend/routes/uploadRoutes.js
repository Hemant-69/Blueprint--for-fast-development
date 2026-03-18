const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const verifyToken = require('../middlewares/jwtverify');

// POST /api/upload (protected)
router.post('/', verifyToken, upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }
        res.status(200).json({
            success: true,
            message: 'File uploaded successfully',
            file: {
                filename: req.file.filename,
                path: req.file.path,
                size: req.file.size,
                mimetype: req.file.mimetype
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Upload failed', error: error.message });
    }
});

module.exports = router;
