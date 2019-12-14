import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const transferOrdersApiRequest = async (item) => {
  const tokenValue = sessionStorage.getItem("token");
  //const company = req.headers;
  //const sourcewarehouse = req.headers;
  //const targetwarehouse = req.headers;
  //const materialsitem = req.headers;
  //const quantity = req.headers;
  return await axios(API_ACCESS_ROUTES.transferOrders, {
    headers: { token: tokenValue }
  })
    .then(response => {
      //console.log("Response", response.data);
      return response.data;
    })
    .catch(error => {
        console.log("Error", error);
        throw new Error(error);
    });
};
