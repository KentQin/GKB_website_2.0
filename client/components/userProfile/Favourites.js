import React from 'react';
import LinkToHome from '../common/LinkToHome';

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
                            <a href="#" className="list-group-item">Newest</a>
                            <a href="#" className="list-group-item">Oldest</a>
                            <a className="list-group-item">Country</a>
                            <a className="list-group-item">Location Type</a>
                        </div>
                    </div>

                    <div className="vertical-block-content-right col-md-9">

                    </div>
                </div>
            </div>
        );
    }
}

export default Favourites;