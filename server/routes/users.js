import express from 'express';
import validateInput from '../shared/validations/signup'

let router = express.Router();



router.post('/', (req, res) => {
    console.log("Server: router: users say: request body:  ",req.body);
    const { errors, isValid } = validateInput(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }

});

//we need to get data from post request

export default router;