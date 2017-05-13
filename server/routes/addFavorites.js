import express from 'express';
import lodash from 'lodash';
import validator from 'validator';
import config from '../config'
import curl from 'curlrequest';
import jwt from 'jsonwebtoken';

var ElementEl = require('./../models/node.js');
var User = require('./../models/user.js');
var DescriptionSchema = require('./../models/placeDescription');
var GooglePlaces = require('./../models/googleplaces')
//var rest = require('rest')

let router = express.Router();

router.post('/', (req, res) => {
    console.log("in addFavorites route");
});



export default router;
