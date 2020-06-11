import * as LS from 'services/localStorage';

const initialState = {
  isAuthenticated: !!LS.getAccessToken(),
  profile: null,
  accessToken: LS.getAccessToken(),
};

export const authenticate = (state, { payload: { accessToken } }) => ({
  ...state,
  isAuthenticated: true,
  accessToken,
});

export const signOut = () => ({ ...initialState });

export default initialState;
