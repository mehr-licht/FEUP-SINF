import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const purchaseApiRequest = async () => {
  const tokenValue = sessionStorage.getItem("token");
  await axios(API_ACCESS_ROUTES.purchases, { headers: { token: tokenValue } })
    .then(response => {
      console.log("Response", response);
    })
    .catch(error => {
      throw new Error(error);
      //console.log("Error", error);
    });
};
