import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'

import { IndexLink, Link } from 'react-router';

class App extends Component {

    constructor(props){
        super (props);
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <h1>
                React Router Tutorial
            </h1>
            <ul role="nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
              <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
            </ul>
              {this.props.children}
          </div>
        );
  }
}

export default App;
