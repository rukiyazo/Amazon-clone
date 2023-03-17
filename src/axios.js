import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/app-19d03/us-central1/api",
});
export default instance;
