import axios from 'axios';
import {
  GET_USERS,
  USERS_ERROR,
  SET_RECEIVER,
  RECEIVER_ERROR
} from './types';

// Get user list
export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/user');

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

// Set receiver
export const setReceiver = (receiver) => async dispatch => {
  try {
    dispatch({
      type: SET_RECEIVER,
      payload: receiver
    });
  } catch (err) {
    dispatch({
      type: RECEIVER_ERROR,
      payload: null
    });
  }
}