/*
 * This route handles favorite requests
 */

import express from 'express';
var User = require('./../models/user.js');
var GooglePlaces = require('./../models/googlePlaces')

let router = express.Router();

router.post('/', (req, res) => {
    console.log("in addFavorites route");
    var placePhoto = req.body.photo
    var addr = req.body.location
    var coords = req.body.coords
    var id = req.body.user_id
    var  autoComment = req.body.autoComment

    console.log("placePhoto: ", placePhoto)
    console.log("addr: ", addr)
    console.log("coords: ", coords)
    console.log("id: ", id)

    if (req.body.type == "google") {
        console.log("in google")
          var query = {
            addr: addr,
          }

          var place = {
            addr: addr,
            image: placePhoto,
            coords: coords,
            // date: Date(),
          }

          GooglePlaces.find(query).count(function(err, count){
              let errors = {}
              console.log("In addFavorites Number of docs: ", count );
              if(count === 0){
                  GooglePlaces.create(place,function(err,dataGoogle) {
                      console.log("Writing to db");
                      if(err){
                          console.log(err.statusCode);
                      }else if(!dataGoogle){
                          console.log(res.statusCode);
                          console.log("Error saving");
                      }else{
                          console.log(res.statusCode);
                          console.log("Registered");

                          User.findOne({_id: id},function(err,data2) {
                              let errors = {};
                              console.log("data2: " + data2);
                              if(err){
                                  console.log(err);
                              }else if(!data2){
                                  //errors.login = "Email does not exist or wrong password";
                                  //res.status(400).json(errors);
                              }else{


                                  var insertToFavorites = {
                                      type: "google",
                                      searchStr: addr
                                  }
                                  //Update searchHistory in user Model.
                                  User.update(
                                      { _id: id, favorites: insertToFavorites},
                                      {$addToSet: { favorites: insertToFavorites}},
                                      function(err, user) {
                                          if (err) {
                                              console.log("error in favorites update");
                                          } else {
                                              console.log("succes in updataing favorites", user);



                                              User.findOne({_id:id,'favorites.searchStr': addr}, function(err, data) {

                                                  if(err) {
                                                      console.log("1111111111111  favoritesgoogle");
                                                  } else if (!data){
                                                      console.log("2222222222222 favorites google");
                                                      var insertToFavoritesNew = {
                                                          type: "google",
                                                          searchStr: addr,
                                                          image: placePhoto,
                                                          coords: coords,
                                                          date: new Date()
                                                      }
                                                      User.update(
                                                          { _id: id},
                                                          {$addToSet: { favorites: insertToFavoritesNew}},
                                                          function(err, user2) {
                                                              if (err) {
                                                                  console.log("in 2nd update favorites error")
                                                              } else {
                                                                  console.log("in 2nd update favorites success", user2);
                                                                  console.log("before pushing new favorite "+ data2.favorites);
                                                                  var favorites = data2.favorites;
                                                                  favorites.push(insertToFavoritesNew);
                                                                  data2.favorites = favorites;
                                                                  console.log("after pushing new favorite "+ favorites);
                                                                  var token = {
                                                                      addr: dataGoogle.addr,
                                                                      image: dataGoogle.image,
                                                                      coords: dataGoogle.coords,
                                                                      user: data2._doc
                                                                  }
                                                                  console.log("GooglePlaces" + dataGoogle);
                                                                  console.log("Updated favorite user "+ data2);
                                                                  // res.json(token);
                                                                  res.status(200).json({token});
                                                              }
                                                          })

                                                  } else {
                                                      console.log("333333333333333 favorites google")
                                                      User.update(
                                                          { 'favorites.searchSt': addr},
                                                          {$set: { 'favorites.$.date': new Date()}},
                                                          function(err, user3) {
                                                              if (err) {
                                                                  console.log("error date favorites updated");
                                                              } else {
                                                                  console.log("updating date favorites",  user3);
                                                                  var token = {
                                                                      addr: dataGoogle.addr,
                                                                      image: dataGoogle.image,
                                                                      coords: dataGoogle.coords,
                                                                      user:data2._doc
                                                                  }
                                                                  console.log("GooglePlaces" + dataGoogle);
                                                                  // res.json(token);
                                                                  res.status(200).json({token});
                                                              }

                                                          })
                                                  }
                                              })

                                          }
                                      });
                              }
                          });

                      }

                  });
              }else{
                  console.log("place already exists in Favorites db");
                  errors.signup = "place already exists in Favorites db";
                  //res.status(400).json(errors);


                  User.findOne({_id: id},function(err,data2) {
                      let errors = {};
                      console.log("data2: " + data2);
                      if(err){
                          console.log(err);
                      }else if(!data2){
                          //errors.login = "Email does not exist or wrong password";
                          //res.status(400).json(errors);
                      }else{


                          var insertToFavorites = {
                              type: "google",
                              searchStr: addr
                          }
                          //Update searchHistory in user Model.
                          User.update(
                              { _id: id, favorites: insertToFavorites},
                              {$addToSet: { favorites: insertToFavorites}},
                              function(err, user) {
                                  if (err) {
                                      console.log("error in favorites update");
                                  } else {
                                      console.log("succes in updataing favorites", user);



                                      User.findOne({_id:id,'favorites.searchStr': addr}, function(err, data) {

                                          if(err) {
                                              console.log("1111111111111  favoritesjena");
                                          } else if (!data){
                                              console.log("2222222222222 favorites jena");
                                              var insertToFavoritesNew = {
                                                  type: "google",
                                                  searchStr: addr,
                                                  image: placePhoto,
                                                  coords: coords,
                                                  date: new Date()
                                              }
                                              User.update(
                                                  { _id: id},
                                                  {$addToSet: { favorites: insertToFavoritesNew}},
                                                  function(err, user2) {
                                                      if (err) {
                                                          console.log("in 2nd update favorites error")
                                                      } else {
                                                          console.log("in 2nd update favorites success", user2);

                                                          var favorites = data2.favorites;
                                                          favorites.push(insertToFavoritesNew);
                                                          data2.favorites = favorites;
                                                          console.log("after pushing new favorite "+ favorites);

                                                          var token = {
                                                              addr: addr,
                                                              image: placePhoto,
                                                              coords: coords,
                                                              user:data2._doc
                                                          }
                                                          // res.json(token);
                                                          res.status(200).json({token});
                                                      }
                                                  })

                                          } else {
                                              console.log("333333333333333 favorites jena")
                                              User.update(
                                                  { 'favorites.searchSt': addr},
                                                  {$set: { 'favorites.$.date': new Date()}},
                                                  function(err, user3) {
                                                      if (err) {
                                                          console.log("error date favorites updated");
                                                      } else {
                                                          console.log("updating date favorites",  user3);
                                                          var token = {
                                                              addr: addr,
                                                              image: placePhoto,
                                                              coords: coords,
                                                              user:data2._doc
                                                          }
                                                          // res.json(token);
                                                          res.status(200).json({token});
                                                      }

                                                  })
                                          }
                                      })

                                  }
                              });
                      }
                  });
              }
          });


    } else {
      // jena place
      console.log("in jena place")

            User.findOne({_id: id},function(err,data2) {
                let errors = {};
                console.log("data2: " + data2);
                if(err){
                    console.log(err);
                }else if(!data2){
                    //errors.login = "Email does not exist or wrong password";
                    //res.status(400).json(errors);
                }else{


                    var insertToFavorites = {
                        type: "jena",
                        searchStr: addr
                        //date: new Date()
                    }
                    //Update searchHistory in user Model.
                    User.update(
                        { _id: id, favorites: insertToFavorites},
                        {$addToSet: { favorites: insertToFavorites}},
                        function(err, user) {
                            if (err) {
                                console.log("error in favorites update");
                            } else {
                                console.log("succes in updataing favorites", user);



                                User.findOne({_id:id,'favorites.searchStr': addr}, function(err, data) {

                                    if(err) {
                                        console.log("1111111111111  favoritesjena");
                                    } else if (!data){
                                        console.log("2222222222222 favorites jena");
                                        var insertToFavoritesNew = {
                                            type: "jena",
                                            searchStr: addr,
                                            image: placePhoto,
                                            coords: coords,
                                            date: new Date()
                                        }
                                        User.update(
                                            { _id: id},
                                            {$addToSet: { favorites: insertToFavoritesNew}},
                                            function(err, user2) {
                                                if (err) {
                                                    console.log("in 2nd update favorites error")
                                                } else {
                                                    console.log("in 2nd update favorites success", user2);
                                                    var favorites = data2.favorites;
                                                    favorites.push(insertToFavoritesNew);
                                                    data2.favorites = favorites;
                                                    console.log("after pushing new favorite "+ favorites);
                                                    var token = {
                                                        addr: addr,
                                                        image: placePhoto,
                                                        coords: coords,
                                                        user:data2._doc,
                                                        autoComment: autoComment
                                                    }
                                                    // res.json(token);
                                                    res.status(200).json({token});
                                                }
                                            })

                                    } else {
                                        console.log("333333333333333 favorites jena")
                                        User.update(
                                            { 'favorites.searchSt': addr},
                                            {$set: { 'favorites.$.date': new Date()}},
                                            function(err, user3) {
                                                if (err) {
                                                    console.log("error date favorites updated");
                                                } else {
                                                    console.log("updating date favorites",  user3);
                                                    var token = {
                                                        addr: addr,
                                                        image: placePhoto,
                                                        coords: coords,
                                                        user:data2._doc,
                                                        autoComment: autoComment
                                                    }
                                                    res.status(200).json({token});
                                                }

                                            })
                                    }
                                })

                            }
                        });
                }
            });

    }
});




export default router;
