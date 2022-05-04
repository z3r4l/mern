const express = require('express');

const app = express();

app.use(() => {
  console.log('Test Server');
  console.log('Okeyyyyy');
  console.log('Okeyyyyy');
  console.log('Okeyyyyy');
});

app.listen(5000);
