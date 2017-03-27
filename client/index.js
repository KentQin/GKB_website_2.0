import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';

import App from './components/App';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import ResetPasswordPage from './components/resetpwd/ResetPasswordPage';
import EmailSentPage from './components/resetpwd/EmailSentPage';
import NewPwdPage from './components/newpassword/NewPwdPage';
import WelcomePage from './components/welcome/WelcomePage';
import InitialPage from './components/googleMaps/MapBox'
import Modalx from './components/modal/ModalxPage';
/*
* createStore(reducer, [preloadedState], enhancer)
* Here, set an empty func (state = {}) => state as reducer
* No preloadedState
* set middleware thunk as enhancer
* thunk allows us to do asynchronous dispatch
* 被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它。这类的 function 就称为 thunk。
* */
const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={LoginPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignupPage}/>
            <Route path="/resetpassword" component={ResetPasswordPage}/>
            <Route path="/emailsentpage" component={EmailSentPage}/>
            <Route path="/welcome" component={InitialPage}/>
            <Route path="/newpwd" component={NewPwdPage}/>
            <Route path="/modal" component={Modalx}/>
        </Router>
    </Provider>
, document.getElementById('app'));
