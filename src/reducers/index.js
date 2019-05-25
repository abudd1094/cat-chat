import { combineReducers } from 'redux';
import messageList from './messageList';
import messageInput from './messageInput';
import userList from './userList';

export default combineReducers({
  messageList,
  messageInput,
  userList
});