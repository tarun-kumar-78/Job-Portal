import axios from "axios";

// Base URL
const BASE_URL = "http://localhost:8080/jobs";

const postJob = async (data: any) => {
  return axios
    .post(`${BASE_URL}/post`, data)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const getAllJobs = async () => {
  return axios
    .get(`${BASE_URL}/getAll`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const getJob = async (id: Number) => {
  return axios
    .get(`${BASE_URL}/get/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const applyJob = async (id: number, applicant: any) => {
  return axios
    .post(`${BASE_URL}/apply/${id}`, applicant)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const getPostedBy = async (id: number) => {
  return axios
    .get(`${BASE_URL}/postedBy/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

const changeJobStatus = async (application: any) => {
  return axios.post(`${BASE_URL}/changeAppStatus`, application);
};

export { postJob, getAllJobs, getJob, applyJob, getPostedBy, changeJobStatus };
