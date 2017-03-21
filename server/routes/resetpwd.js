import express from 'express';
import lodash from 'lodash';
import validator from 'validator';
import transporter from '../mailServer.js'

let router = express.Router();

function validateInput(data) {
    let errors = {};

    // if email is invalid push error
    if (!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    // if email is empty push error
    if (validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    console.log("errors: ", errors);

    return {
        errors,
        isValid: lodash.isEmpty(errors)
    }

}

router.post('/', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    const { errors, isValid } = validateInput(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    } else {
      // Perfect
      console.log("Before sending mail");
      // I am doing this for using email api
        // setup email data with unicode symbols
        let mailOptions = {
            from: '<gkbofficial356@gmail.com>', // sender address
            to: 'ebin joshy <ebinjoshy@gmail.com>', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world ?', // plain text body
            html: '<b>Hello world ?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    }

});

//we need to get data from post request

export default router;
