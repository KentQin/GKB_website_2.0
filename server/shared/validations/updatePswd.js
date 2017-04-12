import lodash from 'lodash';
import validator from 'validator';

export default function validateInput(data) {
    let errors = {};

    if(data.oldPassword.length < 8) {
        errors.oldPassword = 'Invalid old password';
    }
    // if password is empty, push error
    if (data.newPassword.length < 8) {
        errors.newPassword = 'Password needs to be at least 8 characters long';
    }
    // if password is empty, push error
    if (validator.isEmpty(data.newPassword)) {
        errors.newPassword = 'Password is required';
    }
    if (!validator.equals(data.newPassword,data.confirmPassword)) {
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