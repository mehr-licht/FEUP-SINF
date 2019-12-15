const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const { token } = req.headers;
  axios
    .get(
      "https://my.jasminsoftware.com/api/224895/224895-0001/logisticscore/deliveryTerms",
      { headers: { Authorization: token } }
    )
    .then(response => {
      
      return res.send(response.data);
    })
    .catch(error => {
      console.log("Error", error);
      return res.send({ message: "error" });
    });
});

module.exports = router;
