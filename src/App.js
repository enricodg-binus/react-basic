import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/home.js';
import Messages from './components/message.js';
import About from './components/about.js';

import {
    Link,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/messages">Messages</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/messages" component={Messages}/>
              <Route path="/about" component={About}/>
              <Redirect to="/"></Redirect>
          </Switch>
      </div>
    );
  }
}

export default App;
