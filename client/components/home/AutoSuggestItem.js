import React from 'react';

class AutoSuggestItem extends React.Component {

    render() {


        return(
            <div className="auto_item">
                <div>{this.props.name}</div>
                <div>{this.props.addr}</div>
                {/*<div>{this.props.photo}</div>*/}
            </div>
        )
    }
}

export default AutoSuggestItem;