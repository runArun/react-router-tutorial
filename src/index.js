import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import About from './About';
import Repos from './Repos';




ReactDOM.render((

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}/>
        </Route>
    </Router>

    ), document.getElementById('root'));



registerServiceWorker();
