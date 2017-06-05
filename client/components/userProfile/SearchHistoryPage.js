import React from 'react';
import SearchHistory from './SearchHistory';
import { connect } from 'react-redux';

/*
 * This component renders the complete search history page
 * This is used by user profile
 */

class SearchHistoryPage extends React.Component{
    render(){
        return(
            <div className="container">
                <SearchHistory searchHistory={this.props.searchHistory}/>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        searchHistory: state.login.user.searchHistory
    };
}

export default connect(mapStateToProps,{})(SearchHistoryPage);