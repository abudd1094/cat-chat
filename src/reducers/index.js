import { combineReducers } from 'redux';
import messageList from './messageList';
import messageInput from './messageInput';

export default combineReducers({
  messageList,
  messageInput
});