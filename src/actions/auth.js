import axios from 'axios';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token); // set axios header with user token if there is one
  }

  try {
    const res = await axios.get('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/user'); 

    dispatch({
      type: USER_LOADED,
      payload: res.data // this will be the user
    })
  } catch(err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
}

// Login User
export const login = (username, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const body = JSON.stringify({ username, password }) // preparing the data to send

  try {
    const res = await axios.post('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/user', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data // we get a token back on a successful response
    });

    dispatch(loadUser());
  } catch(err) {
    const errors = err.response.data.errors; // response returns an errors array

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL // we don't need a payload bc we don't do anything w a payload in auth reducer in this case
    })
  }
}

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE })
  dispatch({ type: LOGOUT })
}
