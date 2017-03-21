import express from 'express';
import validateInput from '../shared/validations/signup'

var User = require('./../models/user.js');

let router = express.Router();

router.post('/signup', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    var user = {
        username_email: req.body.email,
        password: req.body.password
    },
        options = {upsert: true, new: true, setDefaultsOnInsert: true };

    User.create(user,options,function(err,data){
        console.log("Writing to db");
        if(err){
            console.log(err.statusCode);
        }else if(!data){
            console.log("Error saving");
        }else{
            console.log("Registered");
        }

    });

    // console.log("here");
    // User.findOneAndUpdate(user,function(err,data){
    //    console.log("Dupcheck");
    //    if(err){
    //        console.log(err.statusCode);
    //    }else if(data){
    //        console.log("Already exist")
    //    }elsedata.save(function (err) {
    //        if (err) {
    //            console.log("Error saving");
    //        } else {
    //            console.log("Registered");
    //        }
    //
    //    });
    //
    // });
    // // const { errors, isValid } = validateInput(req.body);
    // if (!isValid) {
    //     res.status(400).json(errors);
    // }


});

router.post('/login', (req, res) => {
    console.log("Message for LoginForm ",req.body);
    var user = {
        email:req.body.username_email,
        password: req.body.password
    };

    User.findOne(user,function(err,data){
        console.log("Authentication going");
        console.log(user.email+","+user.password);
        if(err){
            console.log(err);
        }else if(!data){
            console.log(data);
            console.log("User doesnt exist");
            res.send("Fail");
        }else{
            console.log("Logged in");
            res.send("Success");
        }

    });
});

export default router;