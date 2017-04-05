import lodash from 'lodash';
import validator from 'validator';

export default function validateInput(data) {
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
    if (data.password.length < 8) {
        errors.password = 'Password needs to be at least 8 characters long';
    }
    // if password is empty, push error
    if (validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
    if (!validator.equals(data.password,data.confirmPassword)) {
        errors.confirmPassword = 'Password and Confirm Password do not match';
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