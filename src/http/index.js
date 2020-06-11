import axios from 'axios';

import { actions } from 'redux/auth';
import * as LS from 'services/localStorage';

const baseURL = process.env.REACT_APP_BASE_API;

export const http = axios.create({
  baseURL,
});

const addAccessTokenRequestInterceptor = config => {
  const token = LS.getAccessToken();

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const add401Interceptor = dispatch => {
  http.interceptors.response.use(
    response => response,
    error => {
      const status = error?.response?.status;

      if (status === 401) {
        dispatch(actions.signOut());
      }

      return Promise.reject(error);
    },
  );
};

export { add401Interceptor };

http.interceptors.request.use(addAccessTokenRequestInterceptor);
