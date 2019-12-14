import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const tokenApiRequest = async () => {
  await axios(API_ACCESS_ROUTES.token)
    .then(response => {
      console.log("Response", response);
    })
    .catch(error => {
      console.log("Error", error);
    });
};
