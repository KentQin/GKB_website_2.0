import React from 'react';
import LinkToHome from '../common/LinkToHome';
import FavouriteList from './FavouriteList';

/*
 * This component renders the complete favourite list of a user
 */

class Favourites extends React.Component{
    render(){

        return(
            <div className="vertical-block col-md-offset-1 col-md-8 window-drop-shadow">
                <div className="vertical-block-title">
                    <h4>My Favourites</h4>
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
                                <a href="#" className=" list-group-item list-group-item-white">Newest</a>
                                <a href="#" className=" list-group-item list-group-item-white">Oldest</a>
                                <br/>

                                <h5>Filter By</h5>
                                <a className="list-group-item list-group-item-white">Country</a>
                                <a className="list-group-item list-group-item-white">Location Type</a>
                            </div>

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