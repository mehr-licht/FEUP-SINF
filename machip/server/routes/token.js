const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");

router.get("/", async (req, res) => {
  let data = qs.stringify({
    client_id: "FEUP-SINF-AI-01",
    client_secret: "7aebec1d-e524-470d-9782-395bffa87ef1",
    scope: "application",
    grant_type: "client_credentials"
  });
  axios
    .post("https://identity.primaverabss.com/connect/token", data)
    .then(response => {
      res.status(200).send({ data: response.data });
    })
    .catch(error => {
      res.status(400).send({ error: error });
    });
});

module.exports = router;
