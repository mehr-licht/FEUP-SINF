const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  axios
    .get(
      "https://my.jasminsoftware.com/api/224895/224895-0001/logisticscore/deliveryTerms",
      { headers: { Authorization: this.token } }
    )
    .then(response => {
      console.log("Response", response.data);
      return res.send(response.data);
    })
    .catch(error => {
      console.log("Error", error);
      return res.send({ message: "error" });
    });
});

module.exports = router;
