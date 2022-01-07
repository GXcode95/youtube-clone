import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOG_OUT, LOAD_PROFILE } from "./types";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    profile: user.profile
  }
}

export const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    error
  }
}

export const logOut = () => {
  return {
    type: LOG_OUT
  }
}

export const loadProfile = () => {
  return {
    type: LOAD_PROFILE
  }
}
