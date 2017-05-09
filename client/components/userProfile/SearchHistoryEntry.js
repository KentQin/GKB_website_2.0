import React from 'react';


class SearchHistoryEntry extends React.Component{
    render(){
        return(
            <div className="search-history-entry-box">
                <div className="search-history-entry col-md-offset-1 col-md-10">
                    <h6>{this.props.location}</h6>
                </div>

                <div className="search-history-btn col-md-1">

                </div>
            </div>
        );
    }
}

export default SearchHistoryEntry;
