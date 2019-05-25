import axios from 'axios';
import {
  GET_USERS,
  USERS_ERROR
} from './types';

// Get user list
export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/user');

    console.log(res.data)
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: null
    });
  }
}