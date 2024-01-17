import axios from "axios";

axios.defaults.headers.post[
  "Content-Type"
] = `application/x-www-form-urlencoded`;
axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL + "/api";
axios.defaults.withCredentials = true;
