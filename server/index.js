const Express = require('express');
require('dotenv').config('./.env');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');

const app = new Express;

app.use(Express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});