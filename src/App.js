import React, { Component } from 'react';
import './App.css';
import ConsoleLeft from './components/ConsoleLeft';
import ConsoleRight from './components/ConsoleRight';
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
            <ConsoleLeft />
            <ConsoleRight />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;