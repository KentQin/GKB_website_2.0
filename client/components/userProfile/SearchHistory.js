import React from 'react';
import LinkToHome from '../common/LinkToHome';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import SearchHistoryList from './SearchHistoryList';
import { searchBarRequest } from '../../actions/searchBarAction';
import { updateCoordsRequest} from '../../actions/updateCoords';
import { setShowSearchResult } from '../../actions/setShowSearchResult';
import { setDescriptionArray }from '../../actions/setDescriptionArray';
import { googlePlaceSearchRequest } from '../../actions/googlePlaceSearch.js';


class SearchHistory extends React.Component{
    render(){
        return(
            <div className="vertical-block col-md-offset-1 col-md-8 window-drop-shadow">
                <div className="vertical-block-title">
                    <h4>Search History</h4>
                    <LinkToHome/>
                </div>


                <div className="vertical-block-content">
                    <div className="history-button">
                        <Link to="/signup"  className="history-button"/>Delete
                    </div>

                    <div  className="history-button">
                        <Link to ="/home" />Add to Favourites
                    </div>


                    <div>
                        <SearchHistoryList searchHistory={this.props.searchHistory}
                                           searchBarRequest={this.props.searchBarRequest}
                                           updateCoordsRequest={this.props.updateCoordsRequest}
                                           setShowSearchResult={this.props.setShowSearchResult}
                                           setDescriptionArray={this.props.setDescriptionArray}
                                           googlePlaceSearchRequest={this.props.googlePlaceSearchRequest}/>
                    </div>
                </div>

            </div>
        );
    }
}

SearchHistory.propTypes = {
    searchHistory: React.PropTypes.array.isRequired,
    login: React.PropTypes.object.isRequired,
    searchBarRequest: React.PropTypes.func.isRequired,
    updateCoordsRequest: React.PropTypes.func.isRequired,
    setDescriptionArray: React.PropTypes.func.isRequired,
    setShowSearchResult: React.PropTypes.func.isRequired,
    googlePlaceSearchRequest: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login,
        searchResult: state.searchResult,
        descriptionArray: state.descriptionArray

    };
}

export default connect(mapStateToProps, { searchBarRequest,
                                        updateCoordsRequest,
                                        setShowSearchResult,
                                        setDescriptionArray,
                                        setShowSearchResult,
                                        googlePlaceSearchRequest})(SearchHistory);
