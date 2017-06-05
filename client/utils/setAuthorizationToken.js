/*
 * Token is the security mechanism for the application, when a user login in, a unique token string will be added on every HTTP request
 */

import axios from 'axios';
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