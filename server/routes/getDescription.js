import express from 'express';

var DescriptionSchema = require('./../models/placeDescription');
let router = express.Router();

router.post('/', (req, res) => {
    console.log("Looking for descriptions "+req.body);
   // console.log("finally in getDescription route with: " + req.body);

});

//we need to get data from post request
export default router;