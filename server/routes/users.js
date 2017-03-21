import express from 'express';
import lodash from 'lodash';
import validator from 'validator';

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
    // if password is empty, push error
    if (validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
    if (!validator.equals(data.password,data.confirmPassword)) {
        errors.confirmPassword = 'Password does not match';
    }
    // if confirmPassword is empty, push error
    if (validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Please confirm your password';
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
    }

});

//we need to get data from post request

export default router;