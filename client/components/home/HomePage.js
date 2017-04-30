import React from 'react';
import { connect } from 'react-redux';
import Profile from '../userProfile/Profile';
import NavBar from './NavBar';
import { logout } from '../../actions/authAction';
import SearchBar from './SearchBar';
import { searchBarRequest } from '../../actions/searchBarAction';
import { updateCoordsRequest} from '../../actions/updateCoords'
import GoogleAutoSuggest from '../googleMaps/GoogleAutoSuggest'
import SearchResultList from './SearchResultList';
import { searchBarTestGoAction } from '../../actions/searchBarTestGoAction'

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showProfile: false,
            showSearchResult: false
        }
        this.showProfile = this.showProfile.bind(this);
        this.hideProfile = this.hideProfile.bind(this);
        this.showSearchResult = this.showSearchResult.bind(this);
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

    showSearchResult(){
        this.setState({
            showProfile: true
        })
    }

    // <SearchBar searchBarRequest={this.props.searchBarRequest}
    //            searchBarTestGoAction = {this.props.searchBarTestGoAction}
    //            showSearchResult={this.showSearchResult}/>

    render() {

        const { isAuthenticated } = this.props.login;
        const searchResult = this.props.searchResult;

        return (
            <div className="container loginPage float_on_the_map">
                <NavBar login = {this.props.login} logout={ this.props.logout} hideProfile={this.hideProfile} />

                {isAuthenticated && <Profile login = {this.props.login} />}

                <GoogleAutoSuggest searchBarRequest={this.props.searchBarRequest} updateCoordsRequest={this.props.updateCoordsRequest}/>


                {this.state.showProfile && <SearchResultList searchResult={searchResult}/>}

            </div>
        )
    }
}


HomePage.propTypes = {
    login: React.PropTypes.object.isRequired,
    searchBarRequest: React.PropTypes.func.isRequired,
    updateCoordsRequest: React.PropTypes.func.isRequired,
    //searchBarTestGoAction: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login,
        searchResult: state.searchResult
    };
}

export default connect(mapStateToProps, { logout, searchBarRequest, updateCoordsRequest })(HomePage);
//export default connect(mapStateToProps, { logout, searchBarRequest, searchBarTestGoAction })(HomePage);
