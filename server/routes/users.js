import express from 'express';
import jwt from 'jsonwebtoken';

var User = require('./../models/user.js');

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

    // console.log('Server: You Signup');
    // const token = jwt.sign({
    //     email: user.email
    // }, 'secretkeyforjsonwebtoken');
    // res.json({token});


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
                    // success, then send token to client
                    const token = jwt.sign({
                        email: user.email
                    }, 'secretkeyforjsonwebtoken');
                    res.json({token});
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

    // console.log('Server: You Logged in');
    // const token = jwt.sign({
    //     email: user.email,
    //     userName: 'GKB User'
    // }, 'secretkeyforjsonwebtoken');
    // res.json({token});


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
            // if verify the user, send credential token to client
            // jwt.sign(payload, secret)
            // payload: an object, can be decoded on client
            // secret: for encrypt the token and verify
            // success, then send token back
            const token = jwt.sign({
                email: user.email,
                userName: data.username
            }, 'secretkeyforjsonwebtoken');
            console.log("Logged in " + data);
            res.json({token});
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

    const token = jwt.sign({
        email: user.email
    }, 'secretkeyforjsonwebtoken');
    res.json({token});

    // User.find(email).count(function(err, count){
    //   let errors = {}
    //     console.log( "Number of docs: ", count );
    //     if(count === 0){
    //         User.create(user,function(err,data){
    //             console.log("Writing to db");
    //             if(err){
    //                 console.log(err.statusCode);
    //             }else if(!data){
    //                 console.log(res.statusCode);
    //                 console.log("Error saving");
    //             }else{
    //                 console.log(res.statusCode);
    //                 console.log("Registered");
    //                 res.status(200).json({ success:{} });
    //             }
    //
    //         });
    //     }else{
    //         console.log("Email address exists");
    //         errors.signup = "Email already exits";
    //         res.status(400).json(errors);
    //     }
    // });
});

router.post('/addName', (req, res) => {

    const user = {
        username: req.body.userName,
        email: req.body.email,
    };

    var thisUser = {
        email: req.body.email
    }

    console.log("User info from WelcomeForm:, ", user);

    User.findOneAndUpdate(thisUser, {$set:{username:user.username}}, {new: true}, function(err, doc){
        console.log("Finding " + user.email);
        if(err){
            console.log("Something wrong when updating data!");
        }

        console.log("Doc "+ doc);
        console.log("Username registered");
    });
    //write username into to db
    // 所有的前段数据已经存在变量 user 中了
    // 你可以根据 user.email 和 user.password 唯一对应上某个用户的注册记录
    // 然后为该用户添加用户名

    // 如果添加成功返回如下信息(我暂时comment out了，只需要copy过去就好的)

    const token = jwt.sign({
        email: user.email,
        username: user.username
    }, 'secretkeyforjsonwebtoken');
    res.json({token});

});


export default router;
