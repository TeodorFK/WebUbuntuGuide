const express = require('express');
const routes = require('./routes/default_routers');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('connected to localhost');
});

app.use(express.static('public'));

app.use(routes);
