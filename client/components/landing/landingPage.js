// import React from 'react';
// import SearchBar from './../home/SearchBar';
// import NavBar from '../home/NavBar';
// import {connect} from 'react-redux';
//
// class landingPage extends React.Component{
//     render(){
//         return(
//         <div className="jumbotron">
//
//             <div className="col-md-12 landingPage">
//                 <div>
//                 <NavBar login={this.props.login}/>
//                 </div>
//                 <h3 className="title-white">Locate your destination in one sentence</h3>
//                 <div className="landing-search-bar" >
//                 <SearchBar searchBarRequest={this.props.searchBarRequest}/>
//                 </div>
//                 <p><a className="btn" href="#" role="button">Learn more</a></p>
//             </div>
//
//         </div>
//         );
//     }
// }
//
// landingPage.propTypes = {
//     searchBarRequest: React.PropTypes.func.isRequired
// }
//
// function mapStateToProps(state) {
//     return {
//         login: state.login,
//     };
// }
// export default connect(mapStateToProps)(landingPage);

import React from 'react';
import SearchBar from './../home/SearchBar';
import NavBar from '../home/NavBar';
import {connect} from 'react-redux';
import { searchBarRequest } from '../../actions/searchBarAction';
import { updateCoordsRequest} from '../../actions/updateCoords'
import GoogleAutoSuggest from '../googleMaps/GoogleAutoSuggest'
import LinktoHome from './../common/LinkToHome';

//<GoogleAutoSuggest searchBarRequest={this.props.searchBarRequest} updateCoordsRequest={this.props.updateCoordsRequest}/>

class landingPage extends React.Component{
    render(){

        const { isAuthenticated } = this.props.login;
        // const searchResult = this.props.searchResult;

        return(
            <div className="jumbotron">
                <div className="col-md-12 landingPage">
                    <div>
                        <NavBar login={this.props.login}/>
                    </div>

                    <div className="landing-content">
                        <h3 className="title-white">Locate your destination in one sentence</h3>
                        <div className="landing-search-bar" >
                            <GoogleAutoSuggest searchBarRequest={this.props.searchBarRequest} updateCoordsRequest={this.props.updateCoordsRequest}/>
                        </div>
                        <p><a className="btn" href="#" role="button">Learn more</a></p>
                    </div>

                </div>
            </div>
        );
    }
}

landingPage.propTypes = {
    login: React.PropTypes.object.isRequired,
    searchBarRequest: React.PropTypes.func.isRequired,
    updateCoordsRequest: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login,
    };
}
export default connect(mapStateToProps,{ searchBarRequest, updateCoordsRequest })(landingPage);