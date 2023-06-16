import axios from "axios";

axios.defaults.headers.common["Authorization"] = "test321";
axios.defaults.headers.post[
  "Content-Type"
] = `application/x-www-form-urlencoded`;
axios.defaults.baseURL = "http://172.16.102.33:5000";
axios.defaults.params = {
  user: import.meta.env.VITE_APP_ADMIN_USERNAME,
  password: import.meta.env.VITE_APP_ADMIN_PASSWORD,
};
