import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

// Login User
export const login = (user, password) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  } catch(err) {
    console.log(err)

    dispatch({
      type: LOGIN_FAIL // we don't need a payload bc we don't do anything w a payload in auth reducer in this case
    })
  }
}

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}
