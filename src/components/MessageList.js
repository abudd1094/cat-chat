import React from 'react';
import axios from 'axios';

// const DUM_DATA = [

// ]

class MessageList extends React.Component {
  state = {
    data: null,
    loading: true
  }

  async getData() {
    try {
      const res = await axios.get('http://5ce29cc3e3ced20014d35c09.mockapi.io/catchat/api/messages');
      
      this.setState({ data: res.data, loading: false })
      console.log(this.state)
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getData();
  }

  // componentDidUpdate() {
  //   this.getData();
  // }
  
  render() {
    return (
      <div className="msg-list">
        {this.state.loading === true ? 'loading' : this.state.data.map((msg, index) => {
          return (
            <div key={index} className="msg">
              <div className="msg-user">{msg.sender}</div>
              <div className="msg-text">{msg.text}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessageList;