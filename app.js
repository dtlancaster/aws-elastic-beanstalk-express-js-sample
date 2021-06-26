const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Your mother was a hamster and your father smelt of elderberries!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
