import React from 'react';
import SearchHistoryEntryList from './SearchHistoryEntryList';
import {connect} from 'react-redux';

class SearchHistoryList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        // const {user} = this.props.login;

        var items = [];
        // var { searchHistory } = this.props.login.user;
        //console.log("This:"+searchHistory);
        // const history = {
        //     date:"Date of Search",
        //     entryArray:{entryArray}
        // }

       // var historyArray = [history,history,history];
       var dates = [];


        for(var i = 0; i< 5;i++){
            items.push(
                <div key={i} className="entry-block">
                    {/*<SearchHistoryEntryList entryArray = {searchHistory[i].search}/>*/}
                    <h5 className="search-history-date-title">data</h5>
                    <div className="search-entry-content col-md-offset-2 col-md-8">
                        <p>kent</p>
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

// function mapStateToProps(state) {
//     return {
//         login: state.login
//     };
// }

export default (SearchHistoryList);