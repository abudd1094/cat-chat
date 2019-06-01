import axios from 'axios';
import {
  GET_MESSAGES,
  MESSAGES_ERROR
} from './types';

// Get all messages
export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/messages');

    console.log(res.data)

    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGES_ERROR,
      payload: null
    });
  }
}