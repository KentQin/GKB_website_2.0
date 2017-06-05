import express from 'express';
import bcrypt from 'bcrypt';
var User = require('./../models/user.js');

let router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    console.log("finally in updatePswd route with: " + req.body.password);

    var user = {
        email:req.body.email,
        accountType: 'local'
    };

    var password = req.body.password;
    var newPassword = req.body.newPassword;

    console.log("password: " + req.body.password)

    User.findOne(user,function(err,data){
        let errors = {};
        console.log(data);
        const bool = bcrypt.compareSync(password, data.password);
        // console.log("bool:", bool);
        if(err){
            console.log("Error finding in update pswd")
            console.log(err);
        }else if(!data){
            console.log(data);
            console.log("Email does not exist or wrong password");
            errors.login = "Email does not exist or wrong password";
            res.status(400).json(errors);
        }else if(!bool){
            console.log("Email does not exist or wrong password");
            errors.login = "Email does not exist or wrong password";
            res.status(400).json(errors);
        }else{
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
