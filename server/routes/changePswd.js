import express from 'express';
import lodash from 'lodash';
import validator from 'validator';
import config from '../config'
var User = require('./../models/user.js');

let router = express.Router();

router.post('/:email', (req, res) => {
    console.log("finally in changePswd route with: " + req.params.email);

    var user = {
        email:req.params.email,
        accountType: 'local'
    };

    console.log("password: " + req.body.password)

    User.findOne(user,function(err,data){
        let errors = {};
        console.log(data);
        if(err){
            console.log(err);
        }else if(!data){
            console.log(data);
            console.log("Email does not exist or wrong password");
            errors.login = "Email does not exist or wrong password";
            res.status(400).json(errors);
        }else{
            User.findByIdAndUpdate(data._id, { $set: {password: req.body.password} }, {new: true}, function (err, model) {
                if (err) {
                    console.log("password update error");
                    errors.login = "password update error";
                    res.status(400).json(errors);
                } else {
                    console.log("password update success: " + model);
                    res.redirect('/login');
                }
            });
        }

    });
    //res.redirect('/home');
});

//we need to get data from post request

export default router;
