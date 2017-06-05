import React from 'react';
import LinkToHome from '../common/LinkToHome';
import ContributionList from './ContributonList';
class Contributions extends React.Component{

    render(){

        // var data = this.beforeRender();
        // const {user} = this.props.login;
        return(
            <div className="vertical-block col-md-offset-1 col-md-8 window-drop-shadow">
                <div className="vertical-block-title">
                    <h4>My Contributions</h4>
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

                            <div className="mid-block-favourite-left">
                                <h5>Sort By</h5>
                                <a href="#" className="list-group-item list-group-item-white">Newest</a>
                                <a href="#" className="list-group-item list-group-item-white">Oldest</a>

                                <br/>
                                <h5>Filter By</h5>
                                <a href="#" className="list-group-item list-group-item-white">Country</a>
                                <a href="#" className="list-group-item list-group-item-white">Location Type</a>
                            </div>

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