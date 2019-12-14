import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const salesApiRequest = async () => {
  const tokenValue = sessionStorage.getItem("token");
  return await axios(API_ACCESS_ROUTES.sales, {
    headers: { token: tokenValue }
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