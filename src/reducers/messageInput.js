import {
  SEND_MESSAGE,
  SEND_ERROR
} from '../actions/types';

const initialState = {
  sender: null,
  receiver: true,
  text: '',
  id: 5,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case SEND_MESSAGE:
      return {
        ...state,
        text: payload
      }
    case SEND_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
}