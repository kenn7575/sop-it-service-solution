import { writable } from "svelte/store";

export const currentUser = writable(null); //check for session token in local storage

export const getSession = () => {
  return localStorage.getItem("session") !== null;
};
//validate session token
export const validateSession = async () => {
  return {
    status: 200,
    user: {
      id: 1,
      name: "Test",
    },
  };
};

//login user
export const login = async () => {
  let token = getSession();

  if (token) {
    let res = await validateSession();

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
