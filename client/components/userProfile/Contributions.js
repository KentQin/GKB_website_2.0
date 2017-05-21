import React from 'react';
import LinkToHome from '../common/LinkToHome';
import ContributionList from './ContributonList';
import {descriptionRequest} from '../../actions/getDescriptionAction';
import {connect} from 'react-redux';
import axios from 'axios';
class Contributions extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
        // this.beforeRender = this.beforeRender.bind(this);
    }

    // beforeRender(){
    //     console.log("In contribution compoenent "+this.props.user._id);
    //     const user_id = {
    //         id: this.props.user._id
    //     }
    //
    //     axios.post('/api/description', user_id).then(res =>{
    //         console.log("Here in description action "+JSON.stringify(res.data));
    //         // this.setState({descriptions: res.data});
    //         var descriptions = res.data;
    //         console.log("Before return rendering "+descriptions);
    //         return descriptions;
    //
    //     });
    //
    // }

    render(){

        // var data = this.beforeRender();
        // const {user} = this.props.login;
        return(
            <div className="vertical-block col-md-offset-1 col-md-8 window-drop-shadow">
                <div className="vertical-block-title">
                    <h3>My Contributions</h3>
                    <LinkToHome/>
                </div>

                <div className="vertical-block-content">
                    <div className="vertical-block-content-left col-md-3">
                        <div className="list-group">
                            <br/>
                            <div className="input-group">
                                <input type="search" className="form-control " aria-describedby="basic-addon1"/>
                                <span className="input-group-addon" id="basic-addon1">
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </span>
                            </div>

                            <h5>Sort By</h5>
                            <a href="#" className="list-group-item">Newest</a>
                            <a href="#" className="list-group-item">Oldest</a>
                            <a className="list-group-item">Highest Rank</a>
                            <a className="list-group-item">Lowest Rank</a>

                            <br/>
                            <h5>Filter By</h5>
                            <a href="#" className="list-group-item">Country</a>
                            <a href="#" className="list-group-item">Location Type</a>
                        </div>
                    </div>

                    <div className="vertical-block-content-right col-md-9">
                        <ContributionList />
                    </div>
                </div>
            </div>
        );
    }
}



export default Contributions;