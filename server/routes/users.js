import express from 'express';
import lodash from 'lodash';
import validator from 'validator';

var User = require('./../models/user.js');

let router = express.Router();

router.post('/', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    var user = {
        email: req.body.email,
        password: req.body.password
    };

    User.create(user,function(err,data){
        console.log("Writing to db");
        if(err){
            console.log(err);
        }else if(!data){
            console.log("Error saving");
        }else{
            console.log("User Registed");
        }
        res.status(300).send();
    });
    // const { errors, isValid } = validateInput(req.body);
    // if (!isValid) {
    //     res.status(400).json(errors);
    // }


});

//we need to get data from post request

export default router;