import { writable } from "svelte/store";
import axios from "axios";
import Cookies from "js-cookie";

export const currentUser = writable(null); //check for session token in local storage

export const getSession = () => new Promise(resolve => {
  const token = Cookies.get("token");
  resolve(token);
})
//validate session token
export const validateSession = async () => {
  let { data } = await axios.post("auth/validate").catch((err) => {
    console.log(err);
    return null;
  });

  data.user = data;
  return data;
};

//login user
export const loginViaSession = async () => {
  let { data } = await axios.get("auth/cookies")

  const { token } = data;

  if (!token) {
    currentUser.update((user) => {
      return null; //update current user
    });
    return false;
  }

  let res = await validateSession();

  if (res) {
    currentUser.update((user) => {
      return res.user; //update current user
    });
    return true;
  } else {
    currentUser.update((user) => {
      return null; //update current user
    });
    return false;
  }
};

export async function loginViaCredentials(username, password) {
  let output = { status: 500, message: "Server error", user: undefined };
  await axios
    .post("auth/login", { username, password })
    .then((res) => {
      console.log(res);
      output.message = res.data;
      if (res.data?.username) {
        output.user = res.data;
        output.status = 200;
      }
    })
    .catch((err) => {
      alert(`Ukendt fejl! Kunne ikke kontakte serveren. ${err}`);
    });
  return output;
}
export function logout() {
  axios.post("auth/logout")
  currentUser.update((user) => {
    return null; //update current user
  });
}
