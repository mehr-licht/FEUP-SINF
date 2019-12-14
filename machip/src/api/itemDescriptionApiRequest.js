import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const itemDescriptionApiRequest = async (item) => {
  const tokenValue = sessionStorage.getItem("token");
  return await axios(API_ACCESS_ROUTES.itemDescription, {
    headers: { token: tokenValue, id: item.itemKey}
  })
    .then(response => {
      console.log("Response", response);
      return response.data;
    })
    .catch(error => {
      console.log("Error", error);
      throw new Error(error);
    });
};
