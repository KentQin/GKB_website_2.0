import React from 'react';
import SearchBar from './../home/SearchBar';
import {Link} from 'react-router';


class landingPage extends React.Component{
    render(){
        return(
            // {/*<div className="container landingPage">*/}
            //     {/*<h1>Locate your destination in one sentence</h1>*/}
            //     {/*<SearchBar searchBarRequest={this.props.searchBarRequest}/>*/}
            //     {/*<Link to="" />Learn more*/}
            // {/*</div>*/}
        <div className="jumbotron">
            <div className="container">
                <h3>Locate your destination in one sentence</h3>
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