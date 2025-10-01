import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1", // backend URL
  withCredentials: true, // cookies if any
});

export default API;
