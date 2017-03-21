import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';

import App from './components/App';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';


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
        </Router>
    </Provider>
, document.getElementById('app'));

//render(<App />, document.getElementById('app'));