import React, { useState } from 'react';
import axios from 'axios';

const MessageInput = () => {
  const [formData, setFormData] = useState({
    sender: 'johndoe',
    receiver: 'janedoe',
    text: '',
    id: 5
  });

  const {
    text
  } = formData; 
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/messages', formData, config)
  }
  
  return (
    <div className="container">
      <form action="" onSubmit={e => {onSubmit(e)}}>
        <textarea 
          name="text" 
          value={text} 
          cols="1" 
          rows="3" 
          className="input" 
          onChange={e => onChange(e)}
          placeholder="enter text here"
        ></textarea> 
        <input type="submit" className="btn btn-send" value="Send" />
      </form>
    </div>
  )
}

export default MessageInput;