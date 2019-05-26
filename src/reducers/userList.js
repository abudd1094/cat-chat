import {
  GET_USERS,
  USERS_ERROR,
  SET_RECEIVER,
  RECEIVER_ERROR
} from '../actions/types';

const initialState = {
  users: null,
  loading: true,
  receiver: '',
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      }
    case SET_RECEIVER:
      return {
        ...state,
        receiver: payload,
        loading: false
      }
    case RECEIVER_ERROR:
    case USERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}