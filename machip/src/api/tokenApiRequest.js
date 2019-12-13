import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const tokenApiRequest = async () => {
  await axios(API_ACCESS_ROUTES.token)
    .then(response => {
      const token = response.data.data.token_type + " " + response.data.data.access_token;
      sessionStorage.setItem('token', token)
      console.log("Response", sessionStorage.getItem('token'));
    })
    .catch(error => {
      console.log("Error", error);
    });
};
