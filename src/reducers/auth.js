import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  isAuthenticated: null, 
  loading: true, // will set to false once we load the data
  user: null,
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  
  switch(type) {
    case LOGIN_SUCCESS:
      return {
        payload,
        isAuthenticated: true,
        loading: false
      }
    case AUTH_ERROR: // clears all auth state and token from local storage
    case LOGIN_FAIL: 
    case LOGOUT:
      localStorage.removeItem('username');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state;
  }
}