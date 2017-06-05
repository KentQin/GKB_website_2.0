import express from 'express';
import jwt from 'jsonwebtoken';

var DescriptionSchema = require('./../models/placeDescription');
var User = require('./../models/user');
var GooglePlaces = require('./../models/googlePlaces');
let router = express.Router();

router.post('/', (req, res) => {
    console.log("Looking for descriptions "+JSON.stringify(req.body));
    console.log("id: "+req.body.id);

    const {id } = req.body;

    User.findById(req.body.id,function(err,user){
        let errors = {};
        // console.log("Auth step 1: Authentication going");
        // console.log("Auth step 2: ", user.email+","+user.password);
        // console.log(user);
        if(err){
            console.log(err);
        }else if(!user){
            console.log(user);
            // console.log("Email does not exist or wrong password");
            res.status(400).json(errors);
        }else {
            const user_info = user._doc
            console.log("contributon: ", user_info);

            var this_user = {
                        user_id: user_info._id
            }

            DescriptionSchema.find(this_user, function(err,data){
                var addresses = [];
                if(err){
                    console.log(err);
                }else if(!data){
                    console.log("No contribution yet");
                }else{
                    console.log("Descriptions found ");
                    var user_descriptions = [];
                    for(var i = 0; i<data.length; i++){
                        var this_description={
                            location: data[i].placeFullAddr,
                            description: data[i].description_content,
                            create_date:data[i].date
                        }
                        addresses.push(data[i].placeFullAddr);
                        user_descriptions.push(this_description);
                        // console.log("Pushed "+user_descriptions.length);
                    }

                }

                GooglePlaces.find({addr:{$in:addresses}},function(err,data){
                    if(err){
                        console.log("Error finding google places "+err);
                    }else if(!data){
                        console.log("Cannot find in googleplaces");
                    }else {
                        console.log("MATCHING google palce ");
                        for(var i = 0; i< data.length;i++){
                            for(var j = 0; j<user_descriptions.length;j++){
                                if(data[i].addr=== user_descriptions[j].location){
                                    user_descriptions[i].image = data[i].image;
                                }
                            }

                        }
                    }
                    res.json(user_descriptions);

                });

            });


        }

    });

});

export default router;