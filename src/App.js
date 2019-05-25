import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Console from './components/Console';
import Login from './components/Login';
import NavBar from './components/NavBar';
// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <NavBar />
          <div className="app">
            <h1 className="ui center aligned header">CatChat</h1>
            <Switch>
              <Route exact path='/console' component={Console} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;