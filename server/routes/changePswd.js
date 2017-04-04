import express from 'express';
import lodash from 'lodash';
import validator from 'validator';
import config from '../config'

let router = express.Router();

router.post('/', (req, res) => {
    console.log("finally in changePswd route");

    res.redirect('/home');
});

//we need to get data from post request

export default router;
