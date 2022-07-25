const { validationResult } = require('express-validator');
const BlogPost = require('../models/blog');
exports.createBlogPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error('Invalid Value Tidak Sesuai');
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }
  if (!req.file) {
    const err = new Error('Gambar Belum Di Upload');
    err.errorStatus = 422;
    throw err;
  }

  const tittle = req.body.tittle;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    tittle: tittle,
    body: body,
    image: image,
    author: {
      uid: 1,
      name: 'zeral',
    },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: 'Create Blog Post Success',
        data: result,
      });
    })
    .catch((err) => {
      console.log('err:', err);
    });
};
exports.getAllBlogPost = (req, res, next) => {
  BlogPost.find().then((result) => {
    res
      .status(200)
      .json({
        message: 'Data Blog Post Di temukan',
        data: result,
      })
      .catch((err) => {
        next(err);
      });
  });
};
