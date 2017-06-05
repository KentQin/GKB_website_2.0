/*
 * This route handles forget password requests
 * This will be triggered when user click the link in our offical email
 */

import express from 'express';
import bcrypt from 'bcrypt';
var User = require('./../models/user.js');

let router = express.Router();

router.post('/:email', (req, res) => {
    console.log("finally in changePswd route with: " + req.params.email);

    var user = {
        email:req.params.email,
        accountType: 'local'
    };

    var newPassword = req.body.password;
    console.log("password: " + newPassword)


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
            console.log('newPassword:',newPassword);
            const saltRounds = 10;
            const cPassword = bcrypt.hashSync(newPassword, saltRounds);
            User.findByIdAndUpdate(data._id, { $set: {password: cPassword} }, {new: true}, function (err, model) {
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
});

export default router;
