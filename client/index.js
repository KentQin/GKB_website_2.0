import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';


render((
    <Router history={browserHistory}>
        <Route path="/" component={LoginPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignupPage}/>
    </Router>
), document.getElementById('app'));

//render(<App />, document.getElementById('app'));