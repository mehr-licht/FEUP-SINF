import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const transferOrdersApiRequest = async (item) => {
  const tokenValue = sessionStorage.getItem("token");
  const company = "FEUP-AI";
  const sourcewarehouse = "01";
  const targetwarehouse = item[2];
  const materialsitem = item[0];
  const quantity = item[1];

  return await axios(API_ACCESS_ROUTES.transferOrders, {
    headers: { 
      token: tokenValue, 
      company: company, 
      sourcewarehouse: sourcewarehouse, 
      targetwarehouse: targetwarehouse, 
      materialsitem: materialsitem,
      quantity: quantity
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
        throw new Error(error);
    });
};
