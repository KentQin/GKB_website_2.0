/*
 * This is the container component of AutoSuggestItem
 */

import React from 'react';
import AutoSuggestItem from './AutoSuggestItem'

class AutoSuggestList extends React.Component {

    render() {
        var items = [];
        const { goButtonResultsArray }= this.props.goButtonResultsArray;
        for(var i = 0; i < goButtonResultsArray.length; i++) {
            const {addr} = goButtonResultsArray[i]
            const {name} = goButtonResultsArray[i]
            const {photo} = goButtonResultsArray[i]
            items.push(<AutoSuggestItem addr={addr}
                                        name= {name}
                                        photo={photo}
                                                    />)

        }
        return(
            <div className="auto_list no-click-through">
                {items}
            </div>
        )
    }
}

export default AutoSuggestList;
