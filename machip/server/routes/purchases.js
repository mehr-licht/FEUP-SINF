const express = require("express");
const router = express.Router();
const axios = require("axios");
const token = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBCMjI3OTVEMzcyMzQ2NDIwOUE2MDIxQUQ4OUE1OTdFRjE0OTZEODAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJDeUo1WFRjalJrSUpwZ0lhMkpwWmZ2RkpiWUEifQ.eyJuYmYiOjE1NzYyMzYxNzcsImV4cCI6MTU3NjI1MDU3NywiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5wcmltYXZlcmFic3MuY29tIiwiYXVkIjpbImh0dHBzOi8vaWRlbnRpdHkucHJpbWF2ZXJhYnNzLmNvbS9yZXNvdXJjZXMiLCJqYXNtaW4iXSwiY2xpZW50X2lkIjoiRkVVUC1TSU5GLUFJLTAxIiwic2NvcGUiOlsiYXBwbGljYXRpb24iXX0.PqeU7O3-15jQkV0PmBZbbf7zmssiQwoW4Ep9nJoT5-hHbt0eZ0-kY8fKajgbJNuoAWaDLJOwPonSgDKvuXEXsq_KNhBGqJewy18LAj7HezSqNDwCCSaPu-xY-MOGINenx-yiZsfkIEaAF1f2-S9qSKIVZmuKt74T0Xjk2Or8XJMwwRBXsMffHIbkvzPXQY1xLwpYMNNdztV3DKHUEULPFEiyA1F5KReIfYeZzaRBqUJ6vmtsZF3dlDIS5_mgkl0VHcEQtRQUSdgKltoSdVaf5Xqno4WTcxkw04un9Nrs1h7CGY-xYJSDSGdEoetSK2jQvoZ4knKGBcXf3uUEHPpS4g";

router.get("/", async (req, res) => {
  console.log(req.params)
  axios
    .get(
      "https://my.jasminsoftware.com/api/224895/224895-0001/purchases/orders",
      { headers: { Authorization: token } }
    )
    .then(response => {
      //console.log("Response", response.data);
      return res.send(response.data);
    })
    .catch(error => {
      console.log("Error", error);
      return res.send({ message: "error" });
    });
});

module.exports = router;
