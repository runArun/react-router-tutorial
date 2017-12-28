import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home from './Home';



ReactDOM.render((

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/* 添加 IndexRoute 组件 */}
            <IndexRoute component={Home}/>

            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            {/* Repo Route */}
        </Route>
    </Router>

    ), document.getElementById('root'));



registerServiceWorker();
