const express = require("express"),
  /* bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  hbs = require("hbs"),
  path = require("path"), */
  cors = require("cors"),
  app = express();
//http = require("http"),
/* https = require("https"),
  fs = require("fs"),
  helmet = require("helmet"),
  session = require("express-session"),
  csrf = require("csurf"),
  uuid = require("uuid"),
  crypto = require("crypto"), */
//HTTP_port = process.env.PORT || 5000,
//HTTPS_port = process.env.PORT || 5001;
const logger = require("./logger");
const { STARTED_LISTENING } = require("./logger-messages");
const routes = require("./routes");
const axios = require("axios");
const qs = require("qs");

app.use(cors());

const PORT = 3001;

app.listen(PORT, () => {
  app.emit("app_started");
  logger.info(STARTED_LISTENING(PORT));
});

app.get("/token", async (req, res) => {
  let data = qs.stringify({
    client_id: "FEUP-SINF-AI-01",
    client_secret: "7aebec1d-e524-470d-9782-395bffa87ef1",
    scope: "application",
    grant_type: "client_credentials"
  });
  axios
    .post("https://identity.primaverabss.com/connect/token", data)
    .then(response => {
      console.log("Response", response);
    })
    .catch(error => {
      console.log("Error", error);
    });
  return res.send({ message: "ok" });
});
