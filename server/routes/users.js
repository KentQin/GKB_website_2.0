import express from 'express';
// import validateInput from '../shared/validations/signup';
// import userSeeder from '../models/userSeeder';
// //import nodemailer from 'nodemailer'
// import transporter from '../mailServer.js'
import User from './../models/user.js'


let app = express();
let router = express.Router();



router.post('/api/users', (req, res) => {
    console.log("Getting here");
    console.log(req.body);
    const {errors, isValid} = validateInput(req.body);
    //
    if (isValid) {
        const { username, password, email} = req.body;
        //userSeeder.seed(username, email, password);

        var temp = {
            username: username,
            email: email,
            password: password
        };
        console.log("temp: " + temp);
        User.create(temp, function(err, data) {
            //callback(null, data);
            console.log("wtf is happeneing");
            if (err) {
                console.log("error while saving");
            } else {
                console.log("done saving");
            }
        });



        // I am doing this for using email api
        // setup email data with unicode symbols
        // let mailOptions = {
        //     from: 'Prajith <prajith.manian@gmail.com>', // sender address
        //     to: 'ebin joshy <ebinjoshy@gmail.com>', // list of receivers
        //     subject: 'Hello ✔', // Subject line
        //     text: 'Hello world ?', // plain text body
        //     html: '<b>Hello world ?</b>' // html body
        // };
        //
        // // send mail with defined transport object
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         return console.log(error);
        //     }
        //     console.log('Message %s sent: %s', info.messageId, info.response);
        // });



        res.redirect('/')
    } else {
        res.status(400).json(errors);
    }
});


export default router;
