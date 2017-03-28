import express from 'express';
import jwt from 'jsonwebtoken';

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
                        email: user.email,
                        accountType: user.accountType,
                        id: data._id
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
        password: req.body.password,
        accountType: 'local'
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
        console.log(data);
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
                userName: data.userName,
                accountType: user.accountType,
                id: data._id
            }, 'secretkeyforjsonwebtoken');
            console.log("Logged in");
            res.json({token});
        }

    });

});


router.post('/loginSocial', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    var user = {
        email: req.body.email,
        password: req.body.password,
        accountType: req.body.accountType,
        //imageFile: req.body.imageFile
    }

    var newUser = {
      email: req.body.email,
      password: req.body.password,
      accountType: req.body.accountType,
      imageFile: req.body.imageFile
    }

    User.findOne(user,function(err,data){
        let errors = {};
        console.log("Auth step 1: Authentication going");
        console.log("Auth step 2: ", user.email+","+user.password);
        console.log(data);
        if(err){
            console.log(err);
        }else if(!data){
            console.log(data);
            console.log("Account does not exist. So create");
            //errors.login = "Account does not exist or wrong password";
            User.create(newUser,function(err,newData){
                console.log("Writing to db");
                if(err){
                    console.log(err.statusCode);
                }else if(!newData){
                    console.log(res.statusCode);
                    console.log("Error saving");
                }else{
                    console.log(res.statusCode);
                    console.log("Registered");
                    // success, then send token to client
                    const token = jwt.sign({
                        email: newUser.email,
                        accountType: newUser.accountType,
                        id: newData._id,
                        imageFile: newUser.imageFile
                    }, 'secretkeyforjsonwebtoken');
                    res.json({token});
                }

            });
            res.status(400).json(errors);
        }else{
            //user already there.
            const token = jwt.sign({
                email: user.email,
                accountType: user.accountType,
                id: data._id,
                imageFile: newUser.imageFile,
                userName: data.userName
            }, 'secretkeyforjsonwebtoken');
            console.log("Logged in");
            res.json({token});
        }

    });
});

router.post('/addName', (req, res) => {

    const user = {
        //userName: req.body.userName,
        email: req.body.email,
        accountType: req.body.accountType
    };

    const userName = req.body.userName;

    console.log("User info from WelcomeForm:, ", user);

    User.findOne(user, function(err, data){
        let errors = {};
        console.log("Adding usernmae step 1:");
        console.log(" Adding username step 2:");
        console.log(data);
        if(err){
            console.log(err);
        }else if(!data){
            console.log(data);
            console.log("Account does not exist.");
            errors.login = "Account does not exist.";
            res.status(400).json(errors);
        }else{
            // if verify the user, send credential token to client
            // jwt.sign(payload, secret)
            // payload: an object, can be decoded on client
            // secret: for encrypt the token and verify
            // success, then send token back
            // data.userName = req.body.userName;
            // data.save();
            User.findByIdAndUpdate(data._id, { $set: {userName: userName} }, {new: true}, function (err, model) {
              if (err) {
                console.log("Adding UserNAme update error");
                errors.login = "Adding UserNAme update error";
                res.status(400).json(errors);
              } else {
                  console.log("update success: " + model);
                  const token = jwt.sign({
                      email: user.email,
                      userName: userName,
                      accountType: user.accountType,
                      id: model._id,
                      imageFile: model.imageFile
                  }, 'secretkeyforjsonwebtoken');
                  res.json({token});
              }
            });
        }

    });
});


router.post('/addProfilePic', (req, res) => {

    const user = {
        //userName: req.body.userName,
        imageFile: req.body.imageFile,
        id: req.body.id
    };



    var newPath = __dirname + "\\" + user.imageFile;
    console.log("newPath: " + newPath);
      // write file to uploads/fullsize folder
      require('fs').writeFile(newPath, "data", function (err) {
        // let's see it
        //res.redirect("/uploads/fullsize/" + imageName);
        console.log("I think we are close");
      });
    //const userName = req.body.userName;

    console.log("User info from WelcomeForm: ", user);
    console.log("user image: " + user.imageFile);

    User.findByIdAndUpdate(user.id, { $set: {imageFile: user.imageFile} }, {new: true}, function (err, model) {
      if (err) {
        console.log("Adding imageFile update error");
        errors.login = "Adding imageFile update error";
        res.status(400).json(errors);
      } else {
          console.log("update success: " + model);
          const token = jwt.sign({
              email: model.email,
              userName: model.userName,
              id: model.id
          }, 'secretkeyforjsonwebtoken');
          res.json({token});
      }
    });
});


export default router;
