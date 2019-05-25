import React from 'react'
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

const Console = () => {
  return (
    <div className="horiz-flex-container">
      <div className="console-l">
        <UserList />
      </div>
      <div className="console-r">
        <MessageList />
        <MessageInput />
      </div>
    </div>
  )
}

export default Console;