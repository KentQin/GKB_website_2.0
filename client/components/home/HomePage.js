import React from 'react';
import { connect } from 'react-redux';
import Profile from '../userProfile/Profile';
import NavBar from './NavBar';
import { logout } from '../../actions/authAction';
import SearchBar from './SearchBar';
import { searchBarRequest } from '../../actions/searchBarAction';
import { updateCoordsRequest} from '../../actions/updateCoords';
import { setShowSearchResult } from '../../actions/setShowSearchResult';
import { setDescriptionArray }from '../../actions/setDescriptionArray';
import {setContributionArray } from '../../actions/setContributionArray';
import { setGoButtonResultsArray } from '../../actions/goButtonResults'
import { updateShowSearchResult } from '../../actions/updateShowSearchResult';
//import { updateLike } from '../../actions/updateLike';
//import { addLikeRequest } from '../../actions/addLikeAction';
import GoogleAutoSuggest from '../googleMaps/GoogleAutoSuggest';
import SearchResultList from './SearchResultList';
import AutoSuggestList from './AutoSuggestList';
import { searchBarTestGoAction } from '../../actions/searchBarTestGoAction'
import { addToFavoritesAction } from '../../actions/addToFavorites'

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showProfile: false,
            showSearchResult: true,
            showAutoSuggest: false
        }
        this.showProfile = this.showProfile.bind(this);
        this.hideProfile = this.hideProfile.bind(this);
        this.hideSearchResult = this.hideSearchResult.bind(this);
        this.showAutoSuggest = this.showAutoSuggest.bind(this);
        this.hideAutoSuggest = this.hideAutoSuggest.bind(this);
    }

    showProfile(){
        this.setState({
            showProfile: true
        })
    }


    hideProfile(){
        this.setState({
            showProfile: false
        })
    }

    hideSearchResult(){
        this.setState({
            showSearchResult: false
        })
    }

    showAutoSuggest(){
        this.setState({
            showAutoSuggest: true
        })
    }

    hideAutoSuggest(){
        this.setState({
            showAutoSuggest: false
        })
    }

    // showSearchResult(){
    //     console.log("Show search result*************************************");
    //     this.setState({
    //         showSearchResult: !this.showSearchResult
    //     })
    // }

    // <SearchBar searchBarRequest={this.props.searchBarRequest}
    //            searchBarTestGoAction = {this.props.searchBarTestGoAction}
    //            showSearchResult={this.showSearchResult}/>
    // showSearchResult={this.showSearchResult}

    render() {
        const { isAuthenticated } = this.props.login;
        // const { showSearchResult } = this.props.login.user;
        //const { showSearchResult } = this.props.searchResult.searchResultPageConfig;
        const searchResult = this.props.searchResult;

        var searchResultFlag;
        if (searchResult) {
            if (searchResult.searchResultPageConfig) {
                if (searchResult.searchResultPageConfig.showSearchResult == true) {
                    searchResultFlag = true
                } else {
                    searchResultFlag = false
                }
            } else {
                searchResultFlag = false;
            }
        } else {
            searchResultFlag = false
        }
        console.log("searchResult in HomePage render: ", searchResult)

        const descriptionArray = this.props.descriptionArray;
        const goButtonResultsArray = this.props.goButtonResultsArray;


        return (
            <div className="container loginPage float_on_the_map">
                <NavBar login = {this.props.login} logout={ this.props.logout} hideProfile={this.hideProfile} />

                {isAuthenticated && <Profile login = {this.props.login} />}

                <GoogleAutoSuggest searchBarRequest={this.props.searchBarRequest}
                                   updateCoordsRequest={this.props.updateCoordsRequest}
                                   setShowSearchResult={this.props.setShowSearchResult}
                                   setDescriptionArray={this.props.setDescriptionArray}
                                   setGoButtonResultsArray={this.props.setGoButtonResultsArray}
                                   landingPageFlag = {false}
                                   showAutoSuggest={this.showAutoSuggest}
                                   hideSearchResult={this.hideSearchResult}
                />


                {(searchResultFlag&&this.state.showSearchResult) && <SearchResultList searchResult={searchResult}
                                                       isAuthenticated = {isAuthenticated}
                                                       descriptionArray = {descriptionArray}
                                                       login={this.props.login}
                                                       setDescriptionArray={this.props.setDescriptionArray}
                                                       updateShowSearchResult={this.props.updateShowSearchResult}
                                                       //updateLike = {this.props.updateLike}
                                                       user_id={this.props.login.user._id}
                                                       addToFavoritesAction={this.props.addToFavoritesAction}
                                                       hideSearchResult={this.hideSearchResult}
                                                        />}

                {this.state.showAutoSuggest && <AutoSuggestList goButtonResultsArray={goButtonResultsArray}/>}
                {/*<AutoSuggestList goButtonResultsArray={goButtonResultsArray}/>*/}
            </div>
        )
    }
}


HomePage.propTypes = {
    login: React.PropTypes.object.isRequired,
    searchBarRequest: React.PropTypes.func.isRequired,
    updateCoordsRequest: React.PropTypes.func.isRequired,
    setDescriptionArray: React.PropTypes.func.isRequired,
    updateShowSearchResult: React.PropTypes.func.isRequired,
    setGoButtonResultsArray: React.PropTypes.func.isRequired,
    setContributionArray: React.PropTypes.func.isRequired,
    addToFavoritesAction: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login,
        searchResult: state.searchResult,
        descriptionArray: state.descriptionArray,
        goButtonResultsArray: state.goButtonResultsArray
    };
}

export default connect(mapStateToProps, { logout,
                                        searchBarRequest,
                                        updateCoordsRequest,
                                        setShowSearchResult,
                                        setDescriptionArray,
                                        updateShowSearchResult,
                                        setContributionArray,
                                        setGoButtonResultsArray,
                                        addToFavoritesAction})(HomePage);
