import React from 'react';
import SearchHistoryEntry from './SearchHistoryEntry';


class SearchHistoryEntryList extends React.Component{
    render(){
        var items =[];
        const {entryArray} = this.props.entryArray;

        for(var i =0;i<entryArray.length;i++){
            items.push(
                <div><SearchHistoryEntry location={entryArray[i]} />
                </div>
            )
        }

        return(
            <div className="search-history-date-block">
                {items}
            </div>
        );
    }
}

export default SearchHistoryEntryList;