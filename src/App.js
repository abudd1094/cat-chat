import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList';

class App extends Component {
  render() {
    return(
      <div className="app">
        <h1 className="ui center aligned header">CatChat</h1>
        <MessageList />
      </div>
    )
  }
}

export default App;