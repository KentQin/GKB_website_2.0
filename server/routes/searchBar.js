import express from 'express';
import lodash from 'lodash';
import validator from 'validator';
import config from '../config'
import curl from 'curlrequest';
import jwt from 'jsonwebtoken';

var ElementEl = require('./../models/node.js');
var User = require('./../models/user.js');

let router = express.Router();

router.post('/', (req, res) => {
    console.log("id: " + req.body.id)
    console.log("searchStr: " + req.body.searchStr)
    console.log("finally in searchBar route");

    const button = req.body.button

    // if button was clicked, different way of dealing
    if (button) {
      console.log("go button clicked")
      var autocomplete = new google.maps.places.Autocomplete(input);
      //https://maps.googleapis.com/maps/api/place/autocomplete/json?input=hawthorn&location=-37.8103,144.9544&radius=20&key=AIzaSyBYNqtR2RJBsq44d31RZe2Znch8_SX4RXM

    } else {

      var searchStr = req.body.searchStr
      var result;
      var wayFlag = 0;
      var updatedDbSendTokenFlag = 0;
      var doc_id;

      ElementEl.find({name: searchStr},function(err,docs){
          let errors = {};
          console.log("in elementEL find");
          if (err) {
              console.log(err);
          } else if (!docs) {
              //console.log(data);
              console.log("No docs");
              errors.searchBar = "We could not find " + searchStr
              res.status(400).json(errors);
          } else {

              console.log("docs present: " + docs)
              console.log("docs size", docs.length)
              if (docs.length == 0) {
                console.log("No docs2");
                errors.searchBar = "We could not find " + searchStr
                res.status(400).json(errors);
              } else {
                  for (var i = 0; i < docs.length; i++) {
                      if (docs[i].element.includes("way")) {
                        console.log("it has way")
                        doc_id = docs[i]._id;
                        result = docs[i].element;
                        wayFlag = 1;
                        break;
                      } else if (docs[i].element.includes("node")) {
                        console.log("it has node")
                        doc_id = docs[i]._id;
                        result = docs[i].element;
                        //break;
                      }
                  }

                  console.log("result: " + result);
                  var temp = 'http://localhost:8888/data?query=prefix+spatial%3A+%3Chttp%3A%2F%2Fjena.apache.org%2Fspatial%23%3Eprefix+geo%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2003%2F01%2Fgeo%2Fwgs84_pos%23%3Eprefix+osm%3A+%3Chttp%3A%2F%2Fwiki.openstreetmap.org%2Fwiki%2F%3Eprefix+way%3A+%3Chttp%3A%2F%2Fwww.openstreetmap.org%2Fway%2F%3Eprefix+node%3A+%3Chttp%3A%2F%2Fwww.openstreetmap.org%2Fnode%2F%3Eprefix+infobox%3A+%3Chttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInfobox%2F%3ESELECT+DISTINCT+*+WHERE%7B'
                  var temp2 = '+%3Fp+%3Fo+.%7D+LIMIT+100'
                  var encodeRes = encodeURIComponent(result)
                  console.log("encodeRes: " + encodeRes)
                  var url = temp + encodeRes + temp2
                  // http://localhost:8888/data?query=prefix+spatial%3A+%3Chttp%3A%2F%2Fjena.apache.org%2Fspatial%23%3Eprefix+geo%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2003%2F01%2Fgeo%2Fwgs84_pos%23%3Eprefix+osm%3A+%3Chttp%3A%2F%2Fwiki.openstreetmap.org%2Fwiki%2F%3Eprefix+way%3A+%3Chttp%3A%2F%2Fwww.openstreetmap.org%2Fway%2F%3Eprefix+node%3A+%3Chttp%3A%2F%2Fwww.openstreetmap.org%2Fnode%2F%3Eprefix+infobox%3A+%3Chttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInfobox%2F%3ESELECT+DISTINCT+*+WHERE%7Bnode%3A12327041+%3Fp+%3Fo+.%7D+LIMIT+100
                  console.log("url: " + url);
                  var options = { url: url};
                  curl.request(options, function (err, res1) {
                      //console.log(JSON.parse(res1))
                      //console.log(typeof(res1))
                      if (err) {
                        console.log("in err curl req");
                      } else {
                        var element = JSON.parse(res1)
                        //console.log(element["results"]["bindings"]);
                        var elementArr = element["results"]["bindings"]
                        var len_element = elementArr.length;
                        //console.log("len_element: " + len_element)
                        if (wayFlag == 1) {
                          console.log("in wayFlag == 1")
                          var object, predicate, lat, longt, obj;
                          for (var i = 0; i < len_element; i++) {
                              object = elementArr[i]["o"]
                              predicate = elementArr[i]["p"]
                              if (predicate["value"].includes("hasNode")) {
                                console.log("inside lat");
                                //console.log(object["value"])
                                obj = object["value"]
                                obj = obj.replace("http://www.openstreetmap.org/","")
                                obj = obj.replace("/", ":")
                                console.log("obj: " + obj)
                                var url_new = temp +  encodeURIComponent(obj) + temp2
                                console.log("url_new: " + url_new)
                                var options2 = { url: url_new};
                                curl.request(options2, function (err, res2) {
                                  if (err) {
                                    console.log("in err curl req2");
                                  } else {
                                    console.log("in success curl req 2");
                                    var element2 = JSON.parse(res2)
                                    //console.log(element["results"]["bindings"]);
                                    var elementArr2 = element2["results"]["bindings"]
                                    var len_element2 = elementArr2.length;
                                    var object2, predicate2, lat2, longt2;
                                    for (var k = 0; k < len_element2; k++) {
                                        object2 = elementArr2[k]["o"]
                                        predicate2 = elementArr2[k]["p"]
                                        if (predicate2["value"].includes("#lat")) {
                                          console.log("inside lat2");
                                          console.log(object2["value"])
                                          lat2 = object2["value"]
                                        }
                                        if (predicate2["value"].includes("#long")) {
                                          console.log("inside lat2");
                                          console.log(object2["value"])
                                          longt2 = object2["value"]
                                        }
                                    }
                                    if (req.body.id != null) {
                                        User.findOne({_id: req.body.id},function(err,data2){
                                            let errors = {};
                                            console.log("data2: " + data2);
                                            if(err){
                                                console.log(err);
                                            }else if(!data2){
                                                //errors.login = "Email does not exist or wrong password";
                                                //res.status(400).json(errors);
                                            }else{
                                                var coords2 = {
                                                  lat: lat2,
                                                  longt: longt2
                                                }
                                                console.log("coords2: ", coords2);
                                                const token = jwt.sign({
                                                    email: data2.email,
                                                    userName: data2.userName,
                                                    accountType: data2.accountType,
                                                    id: data2._id,
                                                    imageFile: data2.imageFile,
                                                    coords: coords2
                                                }, 'secretkeyforjsonwebtoken');
                                                console.log("search bar sending token2 ");
                                                updatedDbSendTokenFlag = 1
                                                res.json({token});
                                                //updatedDbSendTokenFlag = 1;
                                            }

                                        });
                                    } else {
                                        var coords2 = {
                                          lat: lat2,
                                          longt: longt2
                                        }
                                        console.log("coords2: ", coords2);
                                        const token = jwt.sign({
                                            email: null,
                                            userName: null,
                                            accountType: null,
                                            id: null,
                                            imageFile: null,
                                            coords: coords2
                                        }, 'secretkeyforjsonwebtoken');
                                        console.log("search bar sending token2 ");
                                        updatedDbSendTokenFlag = 1
                                        res.json({token});
                                    }
                                  }
                                })
                                break;
                              }
                          }
                        } else {
                          var object, predicate, lat, longt;
                          for (var i = 0; i < len_element; i++) {
                              object = elementArr[i]["o"]
                              predicate = elementArr[i]["p"]
                              if (predicate["value"].includes("#lat")) {
                                console.log("inside lat");
                                console.log(object["value"])
                                lat = object["value"]
                              }
                              if (predicate["value"].includes("#long")) {
                                console.log("inside lat");
                                console.log(object["value"])
                                longt = object["value"]
                              }
                          }

                          if (updatedDbSendTokenFlag == 0) {
                              if (req.body.id != null) {
                                  User.findOne({_id: req.body.id},function(err,data){
                                      let errors = {};
                                      console.log("data", data);
                                      if(err){
                                          console.log(err);
                                      }else if(!data){
                                          //errors.login = "Email does not exist or wrong password";
                                          //res.status(400).json(errors);
                                      }else{
                                          var coords = {
                                            lat: lat,
                                            longt: longt
                                          }

                                          var insertToSearchHistory = {
                                            element: doc_id,
                                            searchStr: req.body.searchStr
                                          }
                                          //Update searchHistory in user Model.
                                          User.findByIdAndUpdate(req.body.id, {
                                            $push: { searchHistory: insertToSearchHistory }
                                          }, { 'new': true}, function(err, user) {
                                              if (err) {
                                                    console.log("error in searchhistory update");
                                              } else {
                                                  console.log("succes in updataing searchHistory");
                                                  const token = jwt.sign({
                                                      email: user.email,
                                                      userName: user.userName,
                                                      accountType: user.accountType,
                                                      id: user._id,
                                                      imageFile: user.imageFile,
                                                      coords: coords
                                                  }, 'secretkeyforjsonwebtoken');
                                                  console.log("search bar sending token ");
                                                  res.json({token});
                                              }

                                          });


                                      }

                                  });
                              } else {
                                  var coords = {
                                    lat: lat,
                                    longt: longt
                                  }
                                  console.log("no user coords: ", coords);
                                  const token = jwt.sign({
                                      email: null,
                                      userName: null,
                                      accountType: null,
                                      id: null,
                                      imageFile: null,
                                      coords: coords
                                  }, 'secretkeyforjsonwebtoken');
                                  console.log("search bar sending token lplpl ");
                                  res.json({token});
                              }
                          }

                        }
                      }
                  });
                }
          }

      });
    }
    //res.redirect('/home');
});

// handle search_bar location search
// test version
router.get('/testgo', (req, res) => {
    //console.log('msg from testgo:');
    //console.log(req.query.location);
    const resultlist = loadResultList(req.query.location);
    console.log(resultlist);
    //const token = jwt.sign(resultlist, 'secretkeyforjsonwebtoken');
    //res.json(resultlist);
    //res.json({users: 'users'});
    //res.send('hello');
    //res.json(resultlist);
    res.json(resultlist);

    // console.log("TestGO:" + resultlist);
    // console.log("TestGO:" + resultlist.location);
    // console.log("TestGO:" + resultlist.resultArray);
});

// simulate load query result from db
function loadResultList(location) {
    const results = {};
    const resultNum = rnd(3,8);
    const resultArray = []
    for (let i = 0; i < resultNum; i++){
        let tempJson = {};
        tempJson.userName = 'user-' + i;
        tempJson.rank = rnd(0,300);
        tempJson.discription = 'rank' + i + 'xxxxxxxxxxxxxxxxxx';
        resultArray.push(tempJson);
    }
    resultArray.sort(function(a, b) {
        return parseInt(b.rank) - parseInt(a.rank);
    });
    results.location = location;
    results.resultArray = resultArray;
    results.autoComment = 'autoComment is here';

    return results;
}

// produce a random number
function rnd(start, end){
    return Math.floor(Math.random() * (end - start) + start);
}

//we need to get data from post request

export default router;
