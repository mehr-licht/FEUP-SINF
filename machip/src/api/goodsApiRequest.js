import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const goodsApiRequest = async (item) => {
  const tokenValue = sessionStorage.getItem("token");
  const itemIndex = item[0].index + 1;
  const itemQuantity = item[0].quantity - item[0].receivedQuantity;
  const naturalKey = item[1].naturalKey;
  console.log(naturalKey);
  console.log(itemIndex);
  console.log(itemQuantity);
  return await axios(API_ACCESS_ROUTES.goodsReceipt, {
    headers: { token: tokenValue, itemIndex: itemIndex, itemQuantity: itemQuantity, naturalKey: naturalKey}
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
