import React from 'react'

const DUM_DATA = [
  {
    user: "johndoe",
    text: "Hey, how are you?"
  },
  {
    user: "janedoe",
    text: "Doing well, how about you?"
  },
  {
    user: "johndoe",
    text: "Also well!"
  },
]

const MessageList = () => {
  return (
    <div className="msg-list">
      {DUM_DATA.map((msg, index) => {
        return (
          <div key={index} className="msg">
            <div className="msg-user">{msg.user}</div>
            <div className="msg-text">{msg.text}</div>
          </div>
        )
      })}
    </div>
  )
}

export default MessageList;