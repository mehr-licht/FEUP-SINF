import { API_ACCESS_ROUTES } from "../constants/apiConstants";
const axios = require("axios");

export const deletePickingApiRequest = async (id) => {
  return await axios(API_ACCESS_ROUTES.pickingWave, {
    method: "delete",
    data: { "id": id }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
        console.log("Error", error);
        throw new Error(error);
    });
};
