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
import { updateShowSearchResult } from '../../actions/updateShowSearchResult';
import { addLikeRequest } from '../../actions/addLikeAction';
import GoogleAutoSuggest from '../googleMaps/GoogleAutoSuggest';
import SearchResultList from './SearchResultList';
import { searchBarTestGoAction } from '../../actions/searchBarTestGoAction'
import { addToFavoritesAction } from '../../actions/addToFavorites'

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showProfile: false
        }
        this.showProfile = this.showProfile.bind(this);
        this.hideProfile = this.hideProfile.bind(this);
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
        const { showSearchResult } = this.props.login.user;
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
        // const { showSearchResult } = this.props.searchResult.searchResultPageConfig;

        return (
            <div className="container loginPage float_on_the_map">
                <NavBar login = {this.props.login} logout={ this.props.logout} hideProfile={this.hideProfile} />

                {isAuthenticated && <Profile login = {this.props.login} />}

                <GoogleAutoSuggest searchBarRequest={this.props.searchBarRequest}
                                   updateCoordsRequest={this.props.updateCoordsRequest}
                                   setShowSearchResult={this.props.setShowSearchResult}

                                   setDescriptionArray={this.props.setDescriptionArray}/>


                {searchResultFlag && <SearchResultList searchResult={searchResult}
                                                       isAuthenticated = {isAuthenticated}
                                                       descriptionArray = {descriptionArray}
                                                       login={this.props.login}
                                                       setDescriptionArray={this.props.setDescriptionArray}
                                                       updateShowSearchResult={this.props.updateShowSearchResult}
                                                       addToFavoritesAction={this.props.addToFavoritesAction}
                                                       addLikeRequest={this.props.addLikeRequest}/>}

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
    addToFavoritesAction: React.PropTypes.func.isRequired,
    addLikeRequest: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login,
        searchResult: state.searchResult,
        descriptionArray: state.descriptionArray
    };
}

export default connect(mapStateToProps, { logout,
                                        searchBarRequest,
                                        updateCoordsRequest,
                                        setShowSearchResult,
                                        setDescriptionArray,
                                        updateShowSearchResult,
                                        addToFavoritesAction,
                                        addLikeRequest})(HomePage);
//export default connect(mapStateToProps, { logout, searchBarRequest, searchBarTestGoAction })(HomePage);
