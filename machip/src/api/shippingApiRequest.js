import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const shippingApiRequest = async (item) => {
  const tokenValue = sessionStorage.getItem("token");
  const itemIndex = item[2];
  const itemQuantity = item[0];
  const naturalKey = item[1];
  console.log(naturalKey);
  console.log(itemIndex);
  console.log(itemQuantity);
  return await axios(API_ACCESS_ROUTES.shipping, {
    headers: { token: tokenValue, itemIndex: itemIndex, itemQuantity: itemQuantity, naturalKey: naturalKey}
  })
    .then(response => {
      //
      return response.data;
    })
    .catch(error => {
        console.log("Error", error);
        throw new Error(error);
    });
};
