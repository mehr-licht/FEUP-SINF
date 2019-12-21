import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const getPickingApiRequest = async () => {
  return await axios(API_ACCESS_ROUTES.pickingWave)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};
