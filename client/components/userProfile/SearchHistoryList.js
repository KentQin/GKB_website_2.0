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
        const {user} = this.props.login;

        var items = [];
        var { searchHistory } = this.props.login.user;
        console.log("This:"+searchHistory.length);
        // const history = {
        //     date:"Date of Search",
        //     entryArray:{entryArray}
        // }

       // var historyArray = [history,history,history];
       var dates = [];
       var test = [];
       test.push("1");
       console.log("Test array:" +test.length+","+test.indexOf("1"));

       var currentDate =searchHistory[0].date.getTime;
       for(var i = 0; i< searchHistory.length;i++){

           if(searchHistory[i].date.getTime!=currentDate){
               currentDate = searchHistory[i].date.getTime;
           }
           if(dates.indexOf(currentDate)<0){
               dates.push(currentDate);
           }
           console.log("Date array with length "+dates.length);
           // console.log("looking for date in "+dates.length+","+dates.indexOf(searchHistory[i].date));
           // if(dates.indexOf(searchHistory[i].date)<0){
           //     currentDate = searchHistory[i].date;
           //     dates.push(currentDate);
           //      for(var j = 0; j<searchHistory.length;j++){
           //          if(searchHistory[j].date===currentDate){
           //              console.log(i+","+j+","+currentDate+","+searchHistory[i].searchStr);
           //          }
           //      }
           // }
       }

        for(var i = 0; i< searchHistory.length;i++){
            items.push(
                <div key={i} className="entry-block">
                    {/*<SearchHistoryEntryList entryArray = {searchHistory[i].search}/>*/}
                    <h5 className="search-history-date-title">{searchHistory[0].date}</h5>
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

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps,null)(SearchHistoryList);