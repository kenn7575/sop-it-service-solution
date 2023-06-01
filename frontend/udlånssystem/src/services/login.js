import { writable } from "svelte/store";
import axios from "axios";

export const currentUser = writable(null); //check for session token in local storage

export const getSession = () => {
  return localStorage.getItem("session") !== null;
};
//validate session token
export const validateSession = async (token) => {
  let data = axios.post("/validate.php", { token: token }).then((res) => {
    return res.data;
  });
  //TODO: handle error
  return data.message;
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
