import axios from "axios";

export const apiCalls = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true,
});
