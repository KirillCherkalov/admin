const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const PROFILE_KEY = 'profile';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const setAccessToken = token => localStorage.setItem(ACCESS_TOKEN_KEY, token);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const setRefreshToken = token => localStorage.setItem(REFRESH_TOKEN_KEY, token);

export const removeRefreshToken = () => localStorage.removeItem(REFRESH_TOKEN_KEY);

export const getProfile = () => {
  try {
    const profile = localStorage.getItem(PROFILE_KEY);
    return JSON.parse(profile);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setProfile = profile => localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));

export const removeProfile = () => localStorage.removeItem(PROFILE_KEY);

export const authenticate = ({ accessToken, refreshToken }) => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};

export const clear = () => {
  removeProfile();
  removeAccessToken();
  removeRefreshToken();
};
