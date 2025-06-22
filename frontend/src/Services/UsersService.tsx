import axios from "axios";

// Base URL
const BASE_URL = "http://localhost:8080/users";

const registerUser = async (users: any) => {
  return axios
    .post(`${BASE_URL}/register`, users)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const loginUser = async (login: any) => {
  return axios
    .post(`${BASE_URL}/login`, login)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const sendOTP = async (email: any) => {
  return axios
    .post(`${BASE_URL}/sendotp/${email}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const verifyOTP = async (email: any, otp: any) => {
  return axios
    .get(`${BASE_URL}/verifyotp/${email}/${otp}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const changePassword = async (email: any, password: any) => {
  return axios
    .post(`${BASE_URL}/changePassword`, { email, password })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export { registerUser, loginUser, sendOTP, verifyOTP, changePassword };
