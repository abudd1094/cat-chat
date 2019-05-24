import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div className="app">
          <h1 className="ui center aligned header">CatChat</h1>
          <MessageList />
          <MessageInput />
        </div>
      </Provider>
    )
  }
}

export default App;