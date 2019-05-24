import {
  GET_MESSAGES,
  MESSAGES_ERROR
} from '../actions/types';

const initialState = {
  messages: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload,
        loading: false
      }
    case MESSAGES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}