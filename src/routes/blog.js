const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const blogController = require('../controllers/blog');

router.post('/post', [body('tittle').isLength({ min: 5 }).withMessage('Input Tittle Tidak Sesuai'), body('body').isLength({ min: 5 }).withMessage('Input Body Tidak Sesuai')], blogController.createBlogPost);

router.get('/posts', blogController.getAllBlogPost);
module.exports = router;
