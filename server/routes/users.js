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


    User.findOne(user,function(err,user){
        let errors = {};
        // console.log("Auth step 1: Authentication going");
        // console.log("Auth step 2: ", user.email+","+user.password);
        console.log(user);
        if(err){
            console.log(err);
        }else if(!user){
            console.log(user);
            console.log("Email does not exist or wrong password");
            errors.login = "Email does not exist or wrong password";
            res.status(400).json(errors);
        }else{
            // if verify the user, send credential token to client
            // jwt.sign(payload, secret)
            // payload: an object, can be decoded on client
            // secret: for encrypt the token and verify
            // success, then send token back
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
        console.log("Auth step 2: ", user.email+","+user.password);
        console.log(user);
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
                    const user_info = user._doc
                    //console.log("login: ", user_info);
                    // const token = jwt.sign( user_info.email, 'secretkeyforjsonwebtoken');
                    // console.log("token: ", token);
                    //console.log("Logged in " + data.searchHistory);
                    res.json({user: user_info});
                }
            });
        }

    });
});

//
// import crypto from 'crypto'
// import path from 'path'
//
//
// var storage = multer.diskStorage({
//     destination: 'F:/Uni Melb/4th sem/Research Project/GKB/GKB_final/images',
//     filename: function (req, file, cb) {
//         crypto.pseudoRandomBytes(16, function (err, raw) {
//             if (err) return cb(err)
//
//             cb(null, raw.toString('hex') + path.extname(file.originalname))
//         })
//     }
// })
//
// var upload = multer({ storage: storage })
//
// router.post('/addProfilePic/:userid', upload.single('photo'), function(req, res, next) {
//     console.log("object id: " + req.params.userid);
//     console.log("req.files: ", req.files);
//     console.log("req file: ", req.file);
//     var userId = req.params.userid;
//     //res.end(req.files);
//     User.findByIdAndUpdate(userId, { $set: {imageFile: req.file} }, {new: true}, function (err, model) {
//         if (err) {
//             console.log("Adding imageFile update error");
//             errors.login = "Adding imageFile update error";
//             res.status(400).json(errors);
//         } else {
//             console.log("update success: " + model);
//             const token = jwt.sign({
//                 email: model.email,
//                 userName: model.userName,
//                 id: model.id,
//                 imageFile: model.imageFile
//             }, 'secretkeyforjsonwebtoken');
//             //res.json({token});
//             res.end("sucess");
//             //res.end(model.imageFile);
//         }
//     });
// });

// router.post('/addProfilePic', (req, res) => {
//
//     console.log("req body imageFile ", req.body.imageFile)
//     console.log("req body id: ", req.body.id)
//     console.log("REQ FILES: ", req.files);
//     // const user = {
//     //     //userName: req.body.userName,
//     //     imageFile: req.body.imageFile,
//     //     id: req.body.id
//     // };
//     //
//     // var newPath = __dirname;
//     // console.log("newPath: " + newPath);
//     //   // write file to uploads/fullsize folder
//     //   require('fs').writeFile(newPath, user.imageFile, function (err) {
//     //     // let's see it
//     //     //res.redirect("/uploads/fullsize/" + imageName);
//     //     console.log("I think we are close");
//     //   });
//     //
//     // console.log("User info from WelcomeForm: ", user);
//     // console.log("user image: " + user.imageFile);
//     //
//     // User.findByIdAndUpdate(user.id, { $set: {imageFile: user.imageFile} }, {new: true}, function (err, model) {
//     //   if (err) {
//     //     console.log("Adding imageFile update error");
//     //     errors.login = "Adding imageFile update error";
//     //     res.status(400).json(errors);
//     //   } else {
//     //       console.log("update success: " + model);
//     //       const token = jwt.sign({
//     //           email: model.email,
//     //           userName: model.userName,
//     //           id: model.id
//     //       }, 'secretkeyforjsonwebtoken');
//     //       res.json({token});
//     //   }
//     // });
// });


export default router;