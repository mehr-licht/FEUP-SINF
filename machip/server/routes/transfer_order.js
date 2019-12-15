const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const { token } = req.headers;
  const { company } = req.headers;
  const { sourcewarehouse } = req.headers;
  const { targetwarehouse } = req.headers;
  const { materialsitem } = req.headers;
  const { quantity } = req.headers;
  console.log(company + ", " + sourcewarehouse + ", " + targetwarehouse + ", " + materialsitem + ", " + quantity)
  let config = {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  }
  
  let data = {
	"company": company,
    "sourceWarehouse": sourcewarehouse,
    "targetWarehouse": targetwarehouse,
    "UnloadingCountry":"PT",
    "documentLines": [
        {
            "materialsItem": materialsitem, 
            "quantity":quantity
        }
    ]
   
}

  axios
    .post(
      "https://my.jasminsoftware.com/api/224895/224895-0001/materialsmanagement/stockTransferOrders", data, config)
    .then(response => {
      console.log("Response", response.data);
      return res.send(response.data);
    })
    .catch(error => {
      //console.log("Error", error);
      return res.send({ message: error });
    });
});

module.exports = router;
