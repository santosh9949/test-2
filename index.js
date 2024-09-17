// index.js

console.log('hi mahathi, you look beautiful!');
// index.js

const express = require('express');
const app = express();
const port = 5555;

app.get('/', (req, res) => {
  res.send('hi mahathi, you look beautiful!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

