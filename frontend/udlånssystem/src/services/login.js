import { writable } from "svelte/store";
import axios from "axios";

export const currentUser = writable(null); //check for session token in local storage

export const getSession = () => {
  return localStorage.getItem("session");
};
//validate session token
export const validateSession = async (token) => {
  let data = axios
    .post(
      "http://172.16.3.135:5000/validate.php",
      { token: token },
      { headers: { "Content-type": "application/x-www-form-urlencoded" } }
    )
    .then((res) => {
      return res.data;
    });
  return data;
};

//login user
export const login = async () => {
  let token = getSession();

  if (token) {
    let res = await validateSession(token);

    if (res.status === 200) {
      currentUser.update((user) => {
        return res.user;
      });
    } else {
      //remove session token
      localStorage.removeItem("session");
    }
  }
};
