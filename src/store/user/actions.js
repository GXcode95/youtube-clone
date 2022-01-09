import { 
  LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST,
  LOG_OUT,
  LOAD_PROFILE,
  FETCH_SUBSCRIPTIONS_REQUEST,
  FETCH_SUBSCRIPTIONS_SUCCESS,
  FETCH_SUBSCRIPTIONS_FAIL,
} from "./types";

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

export const fetchSubscriptionsRequest = () => {
  return {
    type: FETCH_SUBSCRIPTIONS_REQUEST
  }
}

export const fetchSubscriptionsSuccess = (subscriptions) => {
  return {
    type: FETCH_SUBSCRIPTIONS_SUCCESS,
    subscriptions
  }
}

export const fetchSubscriptionsFail = (error) => {
  return {
    type: FETCH_SUBSCRIPTIONS_FAIL,
    error
  }
}