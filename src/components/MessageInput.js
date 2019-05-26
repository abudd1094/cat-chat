import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/messageInput';


const MessageInput = ({sendMessage}) => {
  const [formData, setFormData] = useState({
    sender: 'johndoe',
    receiver: 'janedoe',
    text: '',
    id: 5
  });

  useEffect(() => {
    return function cleanup() {
      document.getElementById('messageTextInput').value = "";
    };
  }, [formData.id]);

  const { text } = formData; 
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    sendMessage(formData)
    formData.id += 1
  }
  
  return (
    <div className="container" style={{ marginTop:'-2px' }}>
      <form action="" onSubmit={e => {onSubmit(e)}}>
        <textarea 
          id="messageTextInput"
          name="text" 
          value={text} 
          cols="1" 
          rows="4" 
          className="input" 
          onChange={e => onChange(e)}
          placeholder="enter text here"
        ></textarea> 
        <input type="submit" className="btn btn-send" value="Send" />
      </form>
    </div>
  )
}

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  messageInput: state.messageInput,
  auth: state.auth
});

export default connect(mapStateToProps, { sendMessage })(MessageInput);