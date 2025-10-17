const mongoose = require('mongoose');
const dotenvx = require('./configs');

const database = mongoose
  .connect(dotenvx.mongo_url)
  .then(() => console.log('database is connected'))
  .catch(error => console.log(error.message));

module.exports = database