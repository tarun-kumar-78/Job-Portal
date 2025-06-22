import axios from "axios";

// Base URL
const BASE_URL = "http://localhost:8080/profiles";

export const getProfile = async (id: number) => {
  return axios
    .get(`${BASE_URL}/get/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const updateProfile = async (profile: any) => {
  return axios
    .put(`${BASE_URL}/update`, profile)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
