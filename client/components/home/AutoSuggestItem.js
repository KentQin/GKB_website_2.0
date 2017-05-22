import React from 'react';
import {Link} from 'react-router';

class AutoSuggestItem extends React.Component {

    render() {

        return(
            <div className="auto-item">
                <div className="auto-item-left">
                    <img src=""/>
                </div>
                <div className="auto-item-right">
                    <Link>{this.props.name}</Link>
                    <br/>
                    <Link>{this.props.addr}</Link>
                </div>

                {/*<div>{img src = }</div>*/}
            </div>
        )
    }
}

export default AutoSuggestItem;