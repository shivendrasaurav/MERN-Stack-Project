const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 3000;

const morgan = require('morgan');

const bodyParser = require('body-parser');
const app = express();

const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);

const promoRouter = require('./routes/promoRouter');
app.use('/promotions', promoRouter);

const leaderRouter = require('./routes/leaderRouter');
app.use('/leaders', leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});