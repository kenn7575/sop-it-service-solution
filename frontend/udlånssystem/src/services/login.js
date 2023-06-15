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
      "http://172.16.3.33:5000/validate.php",
      { token: token },
      { headers: { "Content-type": "application/x-www-form-urlencoded" } }
    )
    .then((res) => {
      return res.data;
    });
  return data;
};

//login user
export const loginViaSession = async () => {
  let token = getSession();
  if (!token) return false; //no session token

  let res = await validateSession(token);

  if (res.status === 200) {
    currentUser.update((user) => {
      return res.user; //update current user
    });
    return true;
  } else {
    //remove session token
    localStorage.removeItem("session");
    return false;
  }
};

export async function loginViaCredentials(username, password) {
  let output = { status: 500, message: "Server error", user: undefined };
  await axios
    .post("/login.php", { username: username, password: password })
    .then((res) => {
      console.log(res);
      output.message = res.data.message;
      output.status = res.data.status;
      if (res.data.status === 200) {
        output.user = res.data.user;
      }
    });

  return output;
}
