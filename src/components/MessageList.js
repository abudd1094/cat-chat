import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMessages } from '../actions/messageList';


const MessageList = ({messageList, getMessages}) => {
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
  }, []); 
  
  return (
    <div className="container">
      {messageList.loading === true ? 'loading' : messageList.messages.map((msg, index) => {
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
  messageList: state.messageList
});

export default connect(mapStateToProps, { getMessages })(MessageList);