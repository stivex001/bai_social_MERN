import axios from "axios";

export const apiCalls = axios.create({
  baseURL: "http://localhost:8080/ap1/v1",
  withCredentials: true,
});
