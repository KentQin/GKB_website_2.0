import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';

import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import ResetPasswordPage from './components/resetpwd/ResetPasswordPage';
import EmailSentPage from './components/resetpwd/EmailSentPage';
import NewPwdPage from './components/newpassword/NewPwdPage';
import setAuthorizationToken from './utils/setAuthorizationToken';
import rootReduce from './reducer/rootReducer';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authAction';
<<<<<<< HEAD
import GoogleAutoSuggest from './components/googleMaps/GoogleAutoSuggest'
import MapContainer from './components/googleMaps/MapContainer'
import HttpsRedirect from 'react-https-redirect';
=======
import LandingPage from './components/landing/landingPage';
>>>>>>> adabfa6efc3f44dd60813177f493349d76e25ef8
/*
* createStore(reducer, [preloadedState], enhancer)
* Here, set an empty func (state = {}) => state as reducer
* No preloadedState
* set middleware thunk as enhancer
* thunk allows us to do asynchronous dispatch
* 被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它。这类的 function 就称为 thunk。
* */



const store = createStore(
    rootReduce,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

if (sessionStorage.loginToken) {
    setAuthorizationToken(sessionStorage.loginToken);
    store.dispatch(setCurrentUser(jwt.decode(sessionStorage.loginToken)));
}

window.addEventListener('storage', function(e) {
    console.log('I heard storage changed');

    const newSession = localStorage.getItem('getSessionStorage');

    // 如果是已经登入的页面 写入当前的sessionstorage到localstorage
    if(newSession && sessionStorage.loginToken) {
        console.log('I am already login, I will write loginToken into localstorage');
        const token = sessionStorage.getItem('loginToken');
        localStorage.setItem('loginToken',token);
        console.log('loginToken is in localstorage');
        //localStorage.removeItem('getSessionStorage');
        //console.log('getSessionStorage is removed from localstorage')
    } else if (newSession && !sessionStorage.length){
        console.log('I am the new tag')
        const token = localStorage.getItem('loginToken');
        localStorage.removeItem('getSessionStorage');
        localStorage.removeItem('loginToken');
        sessionStorage.setItem('loginToken',token)
        localStorage.removeItem('loginToken');
        setAuthorizationToken(sessionStorage.loginToken);
        store.dispatch(setCurrentUser(jwt.decode(sessionStorage.loginToken)));
    }
});


if(!sessionStorage.length) {
// 这个调用能触发目标事件，从而达到共享数据的目的
    localStorage.setItem('getSessionStorage',true)
    console.log("set getSessionStorage")
}




render(
    <Provider store={store}>
<<<<<<< HEAD
        <MapContainer />
=======
        {/*<Router history={browserHistory}>*/}
            {/*<Route path="/" component={LandingPage}/>*/}
        {/*</Router>*/}
        <MapBox />
>>>>>>> adabfa6efc3f44dd60813177f493349d76e25ef8
    </Provider>
    , document.getElementById('app')
);


// render(
//     <Provider store={store}>
//         <Router history={browserHistory}>
//             <Route path="/" component={LoginPage}/>
//             <Route path="/login" component={LoginPage}/>
//             <Route path="/signup" component={SignupPage}/>
//             <Route path="/resetpassword" component={ResetPasswordPage}/>
//             <Route path="/emailsentpage" component={EmailSentPage}/>
//             <Route path="/welcome" component={InitialPage}/>
//             <Route path="/newpwd" component={NewPwdPage}/>
//         </Router>
//     </Provider>
// , document.getElementById('app'));
