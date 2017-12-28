import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router';

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
              <li><Link to="/about" activeClassName="active">About</Link></li>
              <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
            </ul>
            <div>{this.props.children}</div>
          </div>
        );
  }
}

export default App;
