import React from 'react';
import SearchHistoryEntryList from './SearchHistoryEntryList';
import {connect} from 'react-redux';
import moment from 'moment';

class SearchHistoryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        // const {user} = this.props.login;


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
            return  new Date(b.date).getTime() - new Date(a.date).getTime()
        });

        searchHistory.forEach(function(history){
            history.formatedDate = moment(history.date).format('MMMM Do YYYY');
            console.log(history);

        });

        //console.log(searchHistory);

        for(var i = 0; i< searchHistory.length;i++){
            items.push(
                <div key={i} className="entry-block">
                    {/*<SearchHistoryEntryList entryArray = {searchHistory[i].search}/>*/}
                    {/*<h5 className="search-history-date-title">data</h5>*/}
                    <div className="search-entry-content col-md-offset-2 col-md-8">
                        <p>{searchHistory[i].searchStr}</p>
                    </div>
                </div>

            )
        }
        return(
            <div className="search-history-block">
                    {items}
            </div>
        );
    }
}


SearchHistoryList.propTypes = {
    searchHistory: React.PropTypes.array.isRequired
}

export default SearchHistoryList;