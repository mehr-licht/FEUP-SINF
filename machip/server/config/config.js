require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DB_URL,
    database: "postgres",
    username: "postgres",
    password: "postgres",
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: true
  },
  production: {
    url: process.env.HEROKU_URL,
    dialect: "postgres"
  }
};
