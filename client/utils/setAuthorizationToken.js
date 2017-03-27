import axios from 'axios';

/*
* When we add the token
* 1. login - done
* 2. signup
* 2. reload page --> client/index page - done
*/
export default function setAuthorizaitonToken(token) {
    if (token) {
        // if we provide token, add Auth header to every request
        // specify Authorization header, and set a Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // else, no token provided, delete the header
        delete axios.defaults.headers.common['Authorization'];
    }
}