require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DB_URL,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: true
  },
  production: {
    url: process.env.HEROKU_URL,
    dialect: "postgres"
  }
};
