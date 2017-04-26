import React from 'react';
import SearchBar from './../home/SearchBar';
import {Link} from 'react-router';


class landingPage extends React.Component{
    render(){
        return(
        <div className="jumbotron">
            <div className="container landingPage">
                <h3 className="title-white">Locate your destination in one sentence</h3>
                <SearchBar searchBarRequest={this.props.searchBarRequest}/>
                <p><a className="btn" href="#" role="button">Learn more</a></p>
            </div>
        </div>
        );
    }
}

landingPage.propTypes = {
    searchBarRequest: React.PropTypes.func.isRequired
}


export default landingPage;