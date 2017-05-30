import React, {Component} from "react";
import GoogleMapLoader from "react-google-maps-loader";
import GooglePlacesSuggest from "react-google-places-suggest";
import "react-google-places-suggest/lib/index.css";
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { addSearchHistory } from '../../actions/addSearchHistory';
import axios from 'axios';

const MY_API_KEY = "AIzaSyBYNqtR2RJBsq44d31RZe2Znch8_SX4RXM"

class MyGoogleSuggest extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchStr: "",
            selectedCoordinate: {},
            errors: {}
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectSuggest = this.handleSelectSuggest.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(e) {

        //console.log('GO is clicked ************');
        // this.props.showSearchResult();
        const {user} = this.props.login;
        this.setState({errors: {} });
        var toSend;
        if (user._id == null) {
            toSend = {
                searchStr: this.state.searchStr,
                user_id: null,
                fulladdr: "",
                button: true
            }
        } else {
            toSend = {
                searchStr: this.state.searchStr,
                user_id: user._id,
                fulladdr: "",
                button: true
            }
        }
        this.setState({
            searchStr: ""
        })
        console.log("searchBarRequest button:", toSend);
        this.props.searchBarRequest(toSend)
            .then(
                // after server response then...
                // if successful
                //var userUpdated = this.props.login.user;
                (res) => {
                    console.log("success in clicking button, back to clientside");
                    console.log("res data", res.data.results);
                    this.props.setGoButtonResultsArray(res.data.results);
                    this.props.showAutoSuggest();
                    this.props.hideSearchResult();
                },
                (err) => {
                    console.log("err in clicking button, back to clientside");

                }
            );

    }

    handleSearchChange(e) {
        this.setState({searchStr: e.target.value})
    }

    handleSelectSuggest(suggest, coordinate, place, directionsResponse) {
        // query apache jena database, if not then go with google.
        const {user} = this.props.login;
        // console.log("this props landingpage flag: ", this.props.landingPageFlag);
        // var flag = this.props.landingPageFlag;
        console.log("search term to jena: ", suggest.terms[0].value);
        this.setState({errors: {} });
        var toSend;
        if (user._id == null) {
            toSend = {
                searchStr: suggest.terms[0].value,
                user_id: null,
                fulladdr: suggest.description,
                button: false
            }
        } else {
            toSend = {
                searchStr: suggest.terms[0].value,
                user_id: user._id,
                fulladdr: suggest.description,
                button: false
            }
        }
        console.log("searchBarRequest:", toSend);

        this.props.searchBarRequest(toSend)
            .then(
                // after server response then...
                // if successful
                //var userUpdated = this.props.login.user;
                (res) => {
                    console.log("we are back in searchBar clientside");

                    const token = res.data.token;
                    // console.log('token: ' ,token);
                    // get token from server side, and store the token into session storage
                    // sessionStorage.removeItem('loginToken');
                    // sessionStorage.setItem('loginToken', token);
                    // setAuthorizationToken(token);
                    // decode token, get user msg from it
                    console.log('decode token: ',token);
                    var userData = token
                    userData.directions = directionsResponse.routes[0].overview_path;
                    if (userData._id == null) {
                        //dispatch(setCurrentUserGuest(jwt.decode(token)));
                        this.props.updateCoordsRequest(userData);
                        const conf = {
                            showSearchResult: true,
                            placeFullAddr:userData.placeFullAddr,
                            placePhoto: "",
                            type: "jena"
                        }
                        console.log("conf conf: ", conf)
                        //dispatch(setSearchResultList(conf));
                        if (token.descriptionArray) {
                            console.log("token descriptionArray line 90 googleAuto");
                            this.props.setDescriptionArray(token.descriptionArray);
                        } else {
                            this.props.setDescriptionArray({});
                        }
                        this.props.setShowSearchResult(conf);
                    } else {
                        // dispatch action 'setCurrentUser' to change state
                        //dispatch(setCurrentUser(jwt.decode(token)));
                        this.props.updateCoordsRequest(userData);
                        // set show result component
                        const conf = {
                            showSearchResult: true,
                            placeFullAddr:userData.placeFullAddr,
                            placePhoto: "",
                            type: "jena"
                        }
                        console.log("conf conf: ", conf)
                        //dispatch(setSearchResultList(conf));
                        if (token.descriptionArray) {
                            console.log("token descriptionArray line 110 googleAuto");
                            this.props.setDescriptionArray(token.descriptionArray);
                        } else {
                            this.props.setDescriptionArray({});
                        }
                        this.props.setShowSearchResult(conf);
                    }



                    if (this.props.landingPageFlag == true) {
                        console.log("just before routing to mapContainer")
                        browserHistory.push('/home');
                    }

                },
                // if server response any error message, set it into state errors
                (err) => {
                    var photo = "";
                    this.setState({searchStr: suggest.description, selectedCoordinate: coordinate}, function() {
                        if (place.photos) {
                            console.log("photo1: ", place.photos[0].getUrl({'maxWidth': 402, 'maxHeight': 268}));
                            photo = place.photos[0].getUrl({'maxWidth': 402, 'maxHeight': 268})
                        } else {
                            photo = ""
                        };


                        // var userData = {
                        //   email: user.email,
                        //   userName: user.userName,
                        //   accountType: user.accountType,
                        //   proImg: user.proImg,
                        //   _id: user._id,
                        //     proImg: user.proImg,
                        //     showSearchResult: true,
                        //   coords: {
                        //     lat: this.state.selectedCoordinate.latitude,
                        //     longt: this.state.selectedCoordinate.longitude
                        //   },
                        //   directions:directionsResponse.routes[0].overview_path,
                        //
                        // }

                        let tempCoords = {  lat: coordinate.latitude,
                            longt:coordinate.longitude
                        };
                        user.coords = tempCoords;
                        user.directions = directionsResponse.routes[0].overview_path;
                        console.log("err  response: ", err.response)
                        if (err.response.data.searchHistory) {
                            console.log("err.response.searchHistory: ", err.response.data.searchHistory)
                            user.searchHistory = err.response.data.searchHistory;
                        }

                        if (err.response.data.autoDescription) {
                            console.log("err.response.autoDescription: ", err.response.data.autoDescription)
                            user.autoDescription = err.response.data.autoDescription;
                        }

                        //const descriptionArray = err.response.descriptionArray
                        // Changing thw whole functionality. For now let descriptionArray is null
                        var descriptionArray = err.response.data.descriptionArray;
                        const conf = {
                            showSearchResult: true,
                            placeFullAddr:suggest.description,
                            placePhoto: photo,
                            type: "google"
                        }
                        console.log("conf conf: ", conf)
                        this.props.setShowSearchResult(conf);

                        if (descriptionArray) {
                            this.props.setDescriptionArray(descriptionArray);
                        } else {
                            this.props.setDescriptionArray({});
                        }
                        this.props.updateCoordsRequest(user);
                        if (this.props.landingPageFlag == true) {
                            console.log("just before routing to mapContainer")
                            browserHistory.push('/home');
                        }

                    })
                }
            );


    }

    render() {
        const {searchStr} = this.state;
        const {googleMaps} = this.props;
//{errors.searchBar && <span className="help-block">{errors.searchBar}</span> }

        return (
            <GooglePlacesSuggest
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest}
                search={searchStr}
            >


                <div className="col-lg-6">
                    <div className="input-group search-bar-box">
                        <input
                            type="text"
                            value={searchStr}
                            className="form-control"
                            placeholder="City, State, Country"
                            onChange={this.handleSearchChange}
                        />

                        <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.buttonClick}> > </button>
                  </span>
                    </div>
                </div>

            </GooglePlacesSuggest>
        )
    }
}

MyGoogleSuggest.propTypes = {
    searchBarRequest: React.PropTypes.func.isRequired,
    login: React.PropTypes.object.isRequired,
    updateCoordsRequest: React.PropTypes.func.isRequired,
    setDescriptionArray: React.PropTypes.func.isRequired,
    setGoButtonResultsArray: React.PropTypes.func.isRequired,
    landingPageFlag: React.PropTypes.any
}

MyGoogleSuggest.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ',state.login);
    //console.log('mapStateToPropsCoords: ',state.coords);
    return {
        login: state.login,
        //coords: state.coords
    };
}

// GoogleMapLoader(MyGoogleSuggest, {
//   libraries: ["places"],
//   key: MY_API_KEY,
// })

export default connect(mapStateToProps, { addSearchHistory })(GoogleMapLoader(MyGoogleSuggest, {
    libraries: ["places"],
    key: MY_API_KEY,
}));
