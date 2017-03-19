import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Login from './components/login/loginPage';


render((
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
    </Router>
), document.getElementById('app'));

//render(<App />, document.getElementById('app'));