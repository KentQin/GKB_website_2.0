import React from 'react';
import SearchHistoryEntryList from './SearchHistoryEntryList';
import {connect} from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router'
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
            console.log("History date here: "+new Date(b.date).getTime());
            return  new Date(b.date).getTime() - new Date(a.date).getTime()
        });

        searchHistory.forEach(function(history){
            history.formatedDate = moment(history.date).format('MMMM Do YYYY');
            console.log(history.formatedDate);

        });

        //console.log(searchHistory);
        var currentDate = null;
        var j = 100;
        for(var i = 0; i< searchHistory.length;i++){
            console.log(searchHistory[i].formatedDate+","+i+','+currentDate);
            if(searchHistory[i].formatedDate ===currentDate) {
                items.push(
                    <div key={i} className="entry-block">
                        <div className="search-entry-content col-md-11">
                            <Link>{searchHistory[i].searchStr}
                                <input className="checkbox-on-entry" name="cb" id="cb" type="checkbox"/>
                            </Link>
                        </div>


                    </div>

                )
                // console.log(currentDate+','+searchHistory[i].formatedDate);
                // items.push(
                //     <div key={j} className="entry-block">
                //         <div className="search-entry-date col-md-offset-1 col-md-4">
                //             <p>{searchHistory[i].formatedDate}
                //             </p>
                //         </div>
                //     </div>
                // )
                // j++;

            } else {
                currentDate = searchHistory[i].formatedDate;
                items.push(
                    <div key={i} className="entry-block">
                        <div className="search-entry-date col-md-4">
                            <p>{searchHistory[i].formatedDate}
                            </p>
                        </div>
                        {/*<SearchHistoryEntryList entryArray = {searchHistory[i].search}/>*/}
                        {/*<h5 className="search-history-date-title">data</h5>*/}
                        <div className="search-entry-content col-md-11">
                            <Link>{searchHistory[i].searchStr}
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
    searchHistory: React.PropTypes.array.isRequired
}

export default SearchHistoryList;