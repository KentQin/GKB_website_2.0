import express from 'express';
import validateInput from '../shared/validations/signup'

let router = express.Router();

router.post('/signup', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    const { errors, isValid } = validateInput(req.body);
    if (isValid) {
        res.status(200).json({success: true});
    } else {
        res.status(400).json(errors);
    }

});

router.post('/login', (req, res) => {
    console.log("Message for LoginForm ",req.body);
});


export default router;