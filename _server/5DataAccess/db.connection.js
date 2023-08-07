const uri = process.env.DB_URI;

const db_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConnection = require("mongoose").connect(uri, db_options);

module.exports = dbConnection;
