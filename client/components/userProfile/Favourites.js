import React from 'react';
import LinkToHome from '../common/LinkToHome';
import FavouriteList from './FavouriteList';

class Favourites extends React.Component{
    render(){

        return(
            <div className="vertical-block col-md-offset-1 col-md-8">
                <div className="vertical-block-title">
                    <h3>My Favourites</h3>
                    <LinkToHome/>
                </div>

                <div className="vertical-block-content">
                    <div className="vertical-block-content-left col-md-3">
                        <h5>Sort By</h5>

                        <div className="list-group">
                            <div className="input-group">
                                <input type="search" className="form-control " aria-describedby="basic-addon1"/>
                                <span className="input-group-addon" id="basic-addon1">
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </span>
                            </div>
                            <br/>
                            <a href="#" className="list-group-item">Newest</a>
                            <a href="#" className="list-group-item">Oldest</a>
                            <a className="list-group-item">Country</a>
                            <a className="list-group-item">Location Type</a>
                        </div>
                    </div>

                    <div className="vertical-block-content-right col-md-9">
                        <FavouriteList />
                    </div>
                </div>
            </div>
        );
    }
}

export default Favourites;