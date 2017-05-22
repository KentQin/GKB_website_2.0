import React from 'react';
import AutoSuggestItem from './AutoSuggestItem'

class AutoSuggestList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //showAutoSuggest: false
        }
        //this.onClickAdd = this.onClickAdd.bind(this);
    }

    render() {
        var items = [];
        const { goButtonResultsArray }= this.props.goButtonResultsArray;
        for(var i = 0; i < goButtonResultsArray.length; i++) {
            const {addr} = goButtonResultsArray[i]
            const {name} = goButtonResultsArray[i]
            const {photo} = goButtonResultsArray[i]
            // console.log(name);
            // console.log(addr);
            items.push(<AutoSuggestItem addr={addr}
                                        name= {name}
                                        photo={photo}
                                                    />)

        }
        return(
            <div className="auto_list">
                {items}
            </div>
        )
    }
}

export default AutoSuggestList;