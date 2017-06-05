/*
 * This component renders the content of search history page
 * This is used by search history component
 */

import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

class SearchHistoryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchStr: "",
            errors: {}
        }
        this.linkClick = this.linkClick.bind(this);
    }

    linkClick(searchStr) {

        console.log("link click in searchHistory")
        console.log("searchStr", searchStr)
        const {user} = this.props.login;
        this.setState({errors: {} });
        var toSend;
        if (user._id == null) {
            toSend = {
                searchStr: "",
                user_id: null,
                fulladdr: searchStr,
                button: false
            }
        } else {
            toSend = {
                searchStr: "",
                user_id: user._id,
                fulladdr: searchStr,
                button: false
            }
        }
        console.log("searchBarRequest11:", toSend);

        this.props.searchBarRequest(toSend)
            .then(
                // after server response then...
                // if successful
                (res) => {
                    console.log("we are back in searchHistory clientside");

                    const token = res.data.token;
                    // get token from server side, and store the token into session storage
                    // sessionStorage.removeItem('loginToken');
                    // sessionStorage.setItem('loginToken', token);
                    // setAuthorizationToken(token);
                    // decode token, get user msg from it
                    console.log('decode token: ',token);
                    var userData = token
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

                    browserHistory.push('/home');

                },
                // if server response any error message, set it into state errors
                (err) => {
                    console.log("in google searchHistory")
                    var photo = "";
                    var obj = {
                      searchStr: searchStr
                    }
                    this.props.googlePlaceSearchRequest(obj).then(
                        (res) => {
                            console.log("in googlePlaceSearch client for searchHistory");
                            const data = res.data.obj;
                            console.log("the data we got back from google searchHistory clicked: ", data)
                            user.coords = {lat: data.lat, longt: data.lng};
                            console.log("err  response: ", err.response)
                            if (err.response.data.searchHistory) {
                                console.log("err.response.searchHistory: ", err.response.data.searchHistory)
                                user.searchHistory = err.response.data.searchHistory;
                            }

                            if (err.response.data.autoDescription) {
                                console.log("err.response.autoDescription searchHistory: ", err.response.data.autoDescription)
                                user.autoDescription = err.response.data.autoDescription;
                            } else {
                                user.autoDescription = null
                            }

                            // Changing thw whole functionality. For now let descriptionArray is null
                            var descriptionArray = err.response.data.descriptionArray;
                            const conf = {
                                showSearchResult: true,
                                placeFullAddr:searchStr,
                                placePhoto: data.photo,
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
                            browserHistory.push('/home');
                        },
                        (err) => {
                            console.log("in googlePlaceSearch error client");
                        }
                    )

                }
            );

    }

    render(){
        // var { searchHistory } = this.props.login.user;
        //console.log("This:"+searchHistory);
        // const history = {
        //     date:"Date of Search",
        //     entryArray:{entryArray}
        // }

        // var historyArray = [history,history,history];
        var dates = [];
        var items = [];

        const searchHistory = this.props.searchHistory;

        searchHistory.sort(function(a,b) {
            console.log("History date here: "+new Date(b.date).getTime());
            return  new Date(b.date).getTime() - new Date(a.date).getTime()
        });

        searchHistory.forEach(function(history){
            history.formatedDate = moment(history.date).format('MMMM Do YYYY');
            console.log(history.formatedDate);

        });

        //console.log(searchHistory);
        // <Link onClick={() => this.linkClick(i)}>{searchHistory[i].searchStr}
        var currentDate = null;
        var j = 100;
        for(var i = 0; i< searchHistory.length;i++){
            console.log(searchHistory[i].formatedDate+","+i+','+currentDate);
            var searchString = searchHistory[i].searchStr
            if(searchHistory[i].formatedDate ===currentDate) {
                items.push(
                    <div key={i} className="entry-block">
                        <div className="search-entry-content col-md-11">
                            <Link onClick={this.linkClick.bind(this, searchString)}>{searchHistory[i].searchStr}
                                <input className="checkbox-on-entry" name="cb" id="cb" type="checkbox"/>
                            </Link>
                        </div>


                    </div>

                )

            } else {
                currentDate = searchHistory[i].formatedDate;
                items.push(
                    <div key={i} className="entry-block">
                        <div className="search-entry-date col-md-4">
                            <p>{searchHistory[i].formatedDate}
                            </p>
                        </div>
                        <div className="search-entry-content col-md-11">
                            <Link onClick={this.linkClick.bind(this, searchString)}>{searchHistory[i].searchStr}
                                <input className="checkbox-on-entry" name="cb" id="cb" type="checkbox"/>
                            </Link>
                        </div>


                    </div>

                )
            }

        }
        return(
            <div className="search-history-block">
                {items}
            </div>
        );
    }
}


SearchHistoryList.propTypes = {
    searchHistory: React.PropTypes.array.isRequired,
    searchBarRequest: React.PropTypes.func.isRequired,
    login: React.PropTypes.object.isRequired,
    updateCoordsRequest: React.PropTypes.func.isRequired,
    setDescriptionArray: React.PropTypes.func.isRequired,
    setShowSearchResult: React.PropTypes.func.isRequired,
    googlePlaceSearchRequest: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ',state.login);
    return {
        login: state.login
    };
}

export default connect(mapStateToProps, {})(SearchHistoryList);
