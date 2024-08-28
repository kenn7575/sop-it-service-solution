import { useContext } from 'react';

import { CurrentUserContext } from '@/App';
import axios from 'axios';
import Cookies from 'js-cookie';

export const getSession = () =>
  new Promise((resolve) => {
    const token = Cookies.get('token');
    resolve(token);
  });
//validate session token
export const validateSession = async () => {
  let { data } = await axios.post('auth/validate').catch((err) => {
    err.response.data.user = null;
    return err.response;
  });

  data.user = data;
  return data;
};

//login user
export const loginViaSession = async () => {
  const { setCurrentUser } = useContext(CurrentUserContext);

  let { data } = await axios.get('auth/cookies');

  const { token } = data;

  if (!token) {
    setCurrentUser(null);
    return false;
  }

  let res = await validateSession();

  if (res && !res.error) {
    setCurrentUser(res.user);
    return true;
  } else {
    setCurrentUser(null);
    return false;
  }
};

export async function loginViaCredentials(username: string, password: string) {
  let output = { status: 500, message: 'Server error', user: undefined };
  await axios
    .post('auth/login', { username, password })
    .then((res) => {
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
export function logout(
  setCurrentUser: React.Dispatch<React.SetStateAction<userState>>,
) {
  axios.post('auth/logout');

  setCurrentUser(null);
}
