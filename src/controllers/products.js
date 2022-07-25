exports.createProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  res.json({
    message: 'Create Product Success',
    data: {
      id: 1,
      name: name,
      price: price,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: 'Product Di Tampilkan Semua',
    data: {
      id: 1,
      name: 'hit',
      price: 12000,
    },
  });
  next();
};
