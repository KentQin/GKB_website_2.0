/*
 * This route handles user authtication, signup, login, etc.
 */

import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

var User = require('./../models/user.js');
var DescriptionSchema = require('./../models/placeDescription');
var GooglePlaces =require('./../models/googlePlaces');
let router = express.Router();

router.post('/signup', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    var user = {
        email: req.body.email,
        password: req.body.password,
        accountType: 'local',
        username:""
    }

    var email = {
        email: req.body.email
    }
    const saltRounds = 10;
    const cPassword = bcrypt.hashSync(user.password, saltRounds);
    user.password = cPassword;

    User.find(email).count(function(err, count){
        let errors = {}
        console.log( "Number of docs: ", count );
        if(count === 0){
            User.create(user,function(err,user){
                console.log("Writing to db");
                if(err){
                    console.log(err.statusCode);
                }else if(!user){
                    console.log(res.statusCode);
                    console.log("Error saving");
                }else{
                    console.log(res.statusCode);
                    console.log("Registered");
                    const user_info = user._doc
                    //console.log("login: ", user_info);
                    const token = jwt.sign( user_info.email, 'secretkeyforjsonwebtoken');
                    console.log("token: ", token);
                    //console.log("Logged in " + data.searchHistory);
                    res.json({  token: token,
                        user: user_info});
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
    // console.log("Message for LoginForm ",req.body);
    var user1 = {
        email:req.body.email,
        accountType: 'local'
    };

    var password = req.body.password;

    User.findOne(user1,function(err,user){
        let errors = {};
        // console.log("Auth step 1: Authentication going");
        // console.log("Auth step 2: ", user.email+","+user.password);
        var bool;
        if (user) {
          console.log("user: ", user)
          bool = bcrypt.compareSync(password, user.password);
        }
        if(err){
            console.log(err);
        }else if(!user){
            console.log(user);
            console.log("Email does not exist or wrong password");
            errors.login = "Email does not exist or wrong password";
            res.status(400).json(errors);
        }else if(!bool){
            console.log("Email does not exist or wrong password");
            errors.login = "Email does not exist or wrong password";
            res.status(400).json(errors);
        }
        else{
            const user_info = user._doc

            ////////////////////////////////////////////////////////////
            ////////////////  Contributions  ///////////////////////////
            ////////////////////////////////////////////////////////////

            var this_user = {
                user_id: user_info._id,
                user_name: user_info.userName
            }


            DescriptionSchema.find(this_user, function(err,data){
                var addresses = [];
                if(err){
                    console.log(err);
                }else if(!data){
                    console.log("No contribution yet");
                }else{
                    console.log("Descriptions: "+data[0]);
                    var user_descriptions = [];
                    for(var i = 0; i<data.length; i++){
                        var this_description={
                            location: data[i].placeFullAddr,
                            description: data[i].description_content,
                            create_date:data[i].date
                        }
                        addresses.push(data[i].placeFullAddr);
                        user_descriptions.push(this_description);
                       // console.log("Pushed "+user_descriptions.length);
                    }

                }

                GooglePlaces.find({addr:{$in:addresses}},function(err,data){
                    if(err){
                        console.log("Error finding google places "+err);
                    }else if(!data){
                        console.log("Cannot find in googleplaces");
                    }else {
                        console.log("MATCHING google palce "+data[0]);
                        for(var i = 0; i< data.length;i++){
                            for(var j = 0; j<user_descriptions.length;j++){
                                if(data[i].addr=== user_descriptions[j].location){
                                    user_descriptions[i].image = data[i].image;
                                }
                            }

                        }
                    }

                    // user_info.contribution = user_descriptions;
                    const token = jwt.sign( user_info.email, 'secretkeyforjsonwebtoken');
                    console.log("token: ", token);

                    //console.log("Logged in " + data.searchHistory);
                    res.json({  token: token,
                        user: user_info, contributionArray:user_descriptions});
                });


            });

        }

    });

});


router.post('/loginSocial', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    var user = {
        email: req.body.email,
        password: req.body.password,
        accountType: req.body.accountType}

    var newUser = {
        email: req.body.email,
        password: req.body.password,
        accountType: req.body.accountType,
        imageFile: req.body.imageFile
    }

    User.findOne(user,function(err,user){
        let errors = {};
        console.log("Auth step 1: Authentication going");
        // console.log("Auth step 2: ", user.email+","+user.password);
        // console.log(user);
        if(err){
            console.log(err);
        }else if(!user){
            //console.log(user);
            console.log("Account does not exist. So create");
            //errors.login = "Account does not exist or wrong password";
            User.create(newUser,function(err,newUser){
                console.log("Writing to db");
                if(err){
                    console.log(err.statusCode);
                }else if(!newUser){
                    console.log(err.statusCode);
                    console.log("Error saving");
                }else{
                    console.log(res.statusCode);
                    console.log("Registered");
                    // success, then send token to client
                    const user_info = newUser._doc
                    //console.log("login: ", user_info);
                    const token = jwt.sign( user_info.email, 'secretkeyforjsonwebtoken');
                    console.log("token: ", token);
                    //console.log("Logged in " + data.searchHistory);
                    res.json({  token: token,
                        user: user_info});
                }

            });
        }else{
            //user already there.
            const user_info = user._doc
            //console.log("login: ", user_info);
            const token = jwt.sign( user_info.email, 'secretkeyforjsonwebtoken');
            console.log("token: ", token);
            //console.log("Logged in " + data.searchHistory);
            res.json({  token: token,
                user: user_info});
        }

    });


});

router.post('/addName', (req, res) => {

    const user = {
        email: req.body.email,
        accountType: req.body.accountType
    };

    const userName = req.body.userName;

    console.log("User info from WelcomeForm:, ", user);

    User.findOne(user, function(err, data){
        let errors = {};
        console.log(data);
        if(err){
            console.log(err);
        }else if(!data){
            console.log(data);
            console.log("Account does not exist.");
            errors.login = "Account does not exist.";
            res.status(400).json(errors);
        }else{
            User.findByIdAndUpdate(data._id, { $set: {userName: userName} }, {new: true}, function (err, user) {
                if (err) {
                    console.log("Adding UserNAme update error");
                    errors.login = "Adding UserNAme update error";
                    res.status(400).json(errors);
                } else {
                    const user_info = user._doc;
                    res.json({user: user_info});
                }
            });
        }

    });
});



export default router;
