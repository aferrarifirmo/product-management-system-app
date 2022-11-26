const mongoose = require('mongoose');
require('dotenv').config('./.env');

const settings = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const database = mongoose.connection;

database.on('error', () => {
  console.log('DB error');
});

database.on('open', () => {
  console.log('Connected to DB');
});

mongoose.connect(process.env.MONGO_DB, settings);

module.exports = mongoose;