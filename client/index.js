import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import setAuthorizationToken from './utils/setAuthorizationToken';
import rootReduce from './reducer/rootReducer';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authAction';
import {setContributionArray} from './actions/authAction';
import MapContainer from './components/googleMaps/MapContainer'

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
    store.dispatch(setCurrentUser(jwt.decode(sessionStorage.loginUser)));
    if(sessionStorage.contributions){
        console.log("test dispatch",jwt.decode(sessionStorage.contributions));
        store.dispatch(setContributionArray((jwt.decode(sessionStorage.contributions)).data));
    }
}

if(!sessionStorage.length) {
    localStorage.setItem('getSessionStorage',true)
    console.log("set getSessionStorage")
}


window.addEventListener('storage', function(e) {
    console.log('I heard storage changed');

    const newSession = localStorage.getItem('getSessionStorage');
    console.log("newSession",newSession);

    if(newSession && sessionStorage.loginToken) {


        console.log('I am already login, I will write loginToken into localstorage');
        const token = sessionStorage.getItem('loginToken');
        const user = sessionStorage.getItem('loginUser');
        const contributions = sessionStorage.getItem('contributions');
        console.log("local storage get contrbutions: "+JSON.stringify(contributions));
        localStorage.setItem('loginToken',token);
        localStorage.setItem('loginUser', user);
        localStorage.setItem('contributions',contributions);
        console.log('loginToken is in localstorage');
        //localStorage.removeItem('getSessionStorage');
        //console.log('getSessionStorage is removed from localstorage')
    } else if (newSession && !sessionStorage.length){
        console.log('I am the new tag')
        const token = localStorage.getItem('loginToken');
        const user = localStorage.getItem('loginUser');
        const contributions = localStorage.getItem('contributions');
        localStorage.removeItem('getSessionStorage');
        sessionStorage.setItem('loginToken',token);
        sessionStorage.setItem('loginUser',user);
        sessionStorage.setItem('contributions',contributions);
        localStorage.removeItem('loginToken');
        localStorage.removeItem('loginUser');
        localStorage.removeItem('contributions');
        console.log("sessionStorage.loginToken: ", sessionStorage.loginToken);
        console.log("sessionStorage.loginToken length: ", sessionStorage.loginToken.length);
        if(sessionStorage.loginToken.length > 4){
            console.log("despatch states");
            setAuthorizationToken(sessionStorage.loginToken);
            store.dispatch(setCurrentUser(jwt.decode(sessionStorage.loginUser)));
            store.dispatch(setContributionArray((jwt.decode(sessionStorage.contributions)).data));
        }

    }
});




render(
    <Provider store={store}>
        <MapContainer />
    </Provider>
    , document.getElementById('app')
);

