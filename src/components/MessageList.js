import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMessages } from '../actions/messageList';


const MessageList = ({messageList, messageInput, getMessages}) => {
  const [formData, setFormData] = useState({
    messages: '',
    loading: 'true'
  });

  useEffect(() => {
    getMessages();

    setFormData({
      messages: messageList.messages,
      loading: 'false'
    });
  }, [messageInput]); 
  
  return (
    <div className="container msg-list">
      {messageList.loading === true ? 'loading...' : messageList.messages.map((msg, index) => {
        return (
          <div key={index} className="msg">
            <div className="msg-sender">{msg.sender}</div>
            <div className="msg-text">{msg.text}</div>
          </div>
        )
      })}
    </div>
  )
}

MessageList.propTypes = {
  getMessages: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  messageList: state.messageList,
  messageInput: state.messageInput
});

export default connect(mapStateToProps, { getMessages })(MessageList);