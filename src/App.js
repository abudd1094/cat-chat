import React, { Component } from 'react';
import './App.css';
import Console from './components/Console';
// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div className="app">
          <h1 className="ui center aligned header">CatChat</h1>
          <div className="horiz-flex-container">
            <Console />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;