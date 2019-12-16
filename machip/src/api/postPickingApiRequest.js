import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const postPickingApiRequest = async (picking_list) => {
  return await axios(API_ACCESS_ROUTES.pickingWave, {
    method: "post",
    data: { "picking_list": picking_list }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
        console.log("Error", error);
        throw new Error(error);
    });
};
