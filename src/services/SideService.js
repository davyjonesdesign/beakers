import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.npoint.io/3b32b9895fdb41799e15",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getItems() {
    return apiClient.get("/sides");
  },
  //Added new call
  getItem(id) {
    return apiClient.get("/sides/" + id);
  },
};