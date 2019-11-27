const express = require("express");
const router = express.Router();
const axios = require("axios");
const qs = require("qs");

router.get("/token", async (req, res) => {
  let data = qs.stringify({
    client_id: "FEUP-SINF-AI-01",
    client_secret: "7aebec1d-e524-470d-9782-395bffa87ef1",
    scope: "application",
    grant_type: "client_credentials"
  });
  axios
    .post("https://identity.primaverabss.com/connect/token", data)
    .then(response => {
      console.log("Response", response.toJSON());
    })
    .catch(error => {
      console.log("Error", error.toJSON());
    });
  return res.send({ message: "ok" });
});

module.exports = router;
