// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Deployed via GitHub Actions');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

