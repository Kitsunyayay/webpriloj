import { LOGIN_USER, LOGOUT_USER } from './ActionTypes';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});