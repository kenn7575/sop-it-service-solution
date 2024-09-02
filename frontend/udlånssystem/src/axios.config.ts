import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL;
axios.defaults.withCredentials = true;
