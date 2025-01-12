const multer = require("multer");
const express = require("express");
const path = require("path");

const router = express.Router();


// const storage = multer.memoryStorage();

// 저장 경로와 파일 이름 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10, // 파일 크기 제한: 5MB
    }
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Example GET endpoint
 *     description: Fetches an example item
 *     responses:
 *       200:
 *         description: Example item
 */
router.get('/', (req, res, next) => {
    return res.json({"success": "ok"})
})

// 업로드 엔드포인트
router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({error: 'No file uploaded'});
    }
    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
    res.json({imageUrl});
});


module.exports = router
