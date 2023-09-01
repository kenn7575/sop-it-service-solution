import axios from "axios";

axios.defaults.headers.common["Authorization"] = import.meta.env.VITE_APP_AUTH;
axios.defaults.headers.post[
  "Content-Type"
] = `application/x-www-form-urlencoded`;
axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL;
axios.defaults.params = {
  user: import.meta.env.VITE_APP_ADMIN_USERNAME,
  password: import.meta.env.VITE_APP_ADMIN_PASSWORD,
};
