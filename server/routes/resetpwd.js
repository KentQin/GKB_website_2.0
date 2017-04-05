import express from 'express';
import lodash from 'lodash';
import validator from 'validator';
import transporter from '../mailServer.js'
import config from '../config'

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
    if (config.dev) {

    } else {

    }
    console.log("Server: router: users say: request body:  ",req.body);
    let email = req.body.email;
    const { errors, isValid } = validateInput(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    } else {
      // Perfect
      console.log("Before sending mail");
      // I am doing this for using email api
        // setup email data with unicode symbols
<<<<<<< HEAD
<<<<<<< HEAD
        var temp = "pleasegod"
=======
        var temp = email
>>>>>>> 77748fcb72c9d579b6ce9d8f97dece457a86020e
=======
        var temp = email
>>>>>>> 92716ca8024f7ccddf2b374373256a2e4fd52bc9
        var url = "http://localhost:9000/newpwd/${temp}"
        console.log("url: " + url);
        var url2 = `http://localhost:9000/newpwd/${temp}`
        console.log("url2: " + url2)

        let mailOptions = {
            from: '<gkbofficial356@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world ?', // plain text body
            // html: '<h2>Hi,</h2><br/><p>We have recently received a request to reset your password.</p><p>If you did not make this request, you can safely disregard this email</p>'
            //       + 'http://localhost:9000/newpwd'
            html: `<head><meta charset="UTF-8"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><link rel="stylesheet" href="css/style.css" type="text/css" /></head><body><div id="container"><h2>Hi,</h2><p>We have recently received a request to reset your password.</p><p>If you did not make this request, you can safely disregard this email</p><form action=${url2}><input type="submit" value="Reset Password" /></form><p>Thanks,</p><p>Your Team at GKB</p></div></body>`
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                //return console.log(error);
                console.log(error);
                res.status(400).json(error);
            }else {
                console.log('Message %s sent: %s', info.messageId, info.response);
                //res.status(300).send();
                res.redirect('/emailsentpage');
            }
        });
        //res.status(300).send();
        //res.redirect('/emailsentpage');
    }

});

//we need to get data from post request

export default router;
