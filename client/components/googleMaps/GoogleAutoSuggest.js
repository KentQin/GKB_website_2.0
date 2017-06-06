/*
 * This component is the search bar, it provides auto suggestions, also search button function.
 * This component imports GoogleMapLoader and GooglePlacesSuggest to implement the core function.
 */

import React, {Component} from "react";
import GoogleMapLoader from "react-google-maps-loader";
import GooglePlacesSuggest from "react-google-places-suggest";
import "react-google-places-suggest/lib/index.css";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { addSearchHistory } from '../../actions/addSearchHistory';

const MY_API_KEY = ""

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
                    this.setState({
                        searchStr: ""
                    })
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
                    console.log('data from server: ',token);
                    var userData = token
                    userData.directions = directionsResponse.routes[0].overview_path;
                    if (userData._id == null) {
                        this.props.updateCoordsRequest(userData);
                        const conf = {
                            showSearchResult: true,
                            placeFullAddr:userData.placeFullAddr,
                            placePhoto: "",
                            type: "jena"
                        }
                        console.log("conf conf: ", conf)
                        if (token.descriptionArray) {
                            console.log("token descriptionArray line 90 googleAuto");
                            this.props.setDescriptionArray(token.descriptionArray);
                        } else {
                            this.props.setDescriptionArray({});
                        }
                        this.props.setShowSearchResult(conf);
                    } else {
                        this.props.updateCoordsRequest(userData);
                        const conf = {
                            showSearchResult: true,
                            placeFullAddr:userData.placeFullAddr,
                            placePhoto: "",
                            type: "jena"
                        }
                        console.log("conf conf: ", conf)
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
                        } else {
                            user.autoDescription = null
                        }
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

        return (
            <GooglePlacesSuggest
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest}
                search={searchStr}
            >


                <div className="col-lg-6 no-click-through">
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
    return {
        login: state.login
    };
}


export default connect(mapStateToProps, { addSearchHistory })(GoogleMapLoader(MyGoogleSuggest, {
    libraries: ["places"],
    key: MY_API_KEY,
}));
