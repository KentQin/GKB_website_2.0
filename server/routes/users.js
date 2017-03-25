import express from 'express';
import validateInput from '../shared/validations/signup'

var User = require('./../models/user.js');

let router = express.Router();

router.post('/signup', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    var user = {
        email: req.body.email,
        password: req.body.password,
        accountType: 'local'
    }

    var email = {
        email: req.body.email
    }

    User.find(email).count(function(err, count){
      let errors = {}
        console.log( "Number of docs: ", count );
        if(count === 0){
            User.create(user,function(err,data){
                console.log("Writing to db");
                if(err){
                    console.log(err.statusCode);
                }else if(!data){
                    console.log(res.statusCode);
                    console.log("Error saving");
                }else{
                    console.log(res.statusCode);
                    console.log("Registered");
                    res.status(200).json({ success:{} });
                }

            });
        }else{
            console.log("Email address exists");
            errors.signup = "Email already exits";
            res.status(400).json(errors);
        }
    });
});

router.post('/login', (req, res) => {
    console.log("Message for LoginForm ",req.body);
    var user = {
        email:req.body.email,
        password: req.body.password
    };

    User.findOne(user,function(err,data){
        let errors = {};
        console.log("Auth step 1: Authentication going");
        console.log("Auth step 2: ", user.email+","+user.password);
        if(err){
            console.log(err);
        }else if(!data){
            console.log(data);
            console.log("Email does not exist or wrong password");
            errors.login = "Email does not exist or wrong password";
            res.status(400).json(errors);
        }else{
            console.log("Logged in");
            res.status(200).json({ success:{} });
        }

    });
});

router.post('/loginSocial', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    var user = {
        email: req.body.email,
        password: req.body.password,
        accountType: req.body.accountType
    }

    var email = {
        email: req.body.email
    }

    User.find(email).count(function(err, count){
      let errors = {}
        console.log( "Number of docs: ", count );
        if(count === 0){
            User.create(user,function(err,data){
                console.log("Writing to db");
                if(err){
                    console.log(err.statusCode);
                }else if(!data){
                    console.log(res.statusCode);
                    console.log("Error saving");
                }else{
                    console.log(res.statusCode);
                    console.log("Registered");
                    res.status(200).json({ success:{} });
                }

            });
        }else{
            console.log("Email address exists");
            errors.signup = "Email already exits";
            res.status(400).json(errors);
        }
    });
});


export default router;
