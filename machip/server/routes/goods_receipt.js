const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const { token } = req.headers;
  const { itemindex } = req.headers;
  const { itemquantity } = req.headers;
  const { naturalkey } = req.headers;
  console.log(itemquantity)
  let config = {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  }
  
  let data = [
      {
        "SourceDocKey": naturalkey,
        "SourceDocLineNumber": itemindex,
        "quantity": itemquantity 
      }
    ]

  axios
    .post(
      "https://my.jasminsoftware.com/api/224895/224895-0001/goodsreceipt/processOrders/FEUP-AI", data, config)
    .then(response => {
      
      return res.send(response.data);
    })
    .catch(error => {
      //console.log("Error", error);
      return res.send({ message: error });
    });
});

module.exports = router;
