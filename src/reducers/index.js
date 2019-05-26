import { combineReducers } from 'redux';
import messageList from './messageList';
import messageInput from './messageInput';
import userList from './userList';
import auth from './auth';

export default combineReducers({
  auth,
  userList,
  messageInput, 
  messageList,
});