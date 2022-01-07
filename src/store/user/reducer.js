import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOG_OUT, LOAD_PROFILE } from "./types";


const initialState = {
  loading: false,
  profile: null,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.profile
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        profile: null,
      }
    case LOAD_PROFILE:
      return {
        ...state,
        loading: false,
      }
    default: 
      return state;
  }
}

export default userReducer