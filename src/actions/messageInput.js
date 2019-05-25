import axios from 'axios';
import {
  SEND_MESSAGE,
  SEND_ERROR
} from './types';

// Send message
export const sendMessage = (formData) => async dispatch => {    
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/messages', formData, config)

    dispatch({
      type: SEND_MESSAGE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEND_ERROR,
      payload: null
    });
  }
}