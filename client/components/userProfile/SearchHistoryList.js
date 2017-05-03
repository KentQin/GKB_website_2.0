import React from 'react';
import SearchHistoryEntryList from './SearchHistoryEntryList';

class SearchHistoryList extends React.Component{
    render(){
        var items = [];
        var entryArray = ["kkkkkkkkk","oooooooo","ppppppppp","kkkkklllll"];
        const history = {
            date:"Date of Search",
            entryArray:{entryArray}
        }

        var historyArray = [history,history,history];

        for(var i = 0; i< historyArray.length;i++){
            items.push(
                <div className="search-history-date-block">
                    <h5 className="search-history-date-title">{historyArray[i].date}</h5>
                    <SearchHistoryEntryList entryArray = {historyArray[i].entryArray}/>
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

export default SearchHistoryList;