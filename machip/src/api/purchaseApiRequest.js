import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const purchaseApiRequest = async () => {
  await axios(API_ACCESS_ROUTES.purchases, {params: {token: "ola"}})
    .then(response => {
      console.log("Response", response);
    })
    .catch(error => {
      console.log("Error", error);
    });
};
