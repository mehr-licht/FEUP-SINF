const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  axios
    .get(
      "https://my.jasminsoftware.com/api/224895/224895-0001/sales/orders/54ee6d22-07f0-e911-b862-0003ff242cc8",
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
