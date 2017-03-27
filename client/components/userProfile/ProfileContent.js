import React from 'react';
import setting from './../img/account-settings.png';
import contribution from './../img/contributions.png';
import favourites from './../img/heart.png';
import history from './../img/history.png';

class ProfileContent extends React.Component{
    render(){
        return(
            <div>
                <div className="list-group">
                    <a href="#" className="list-group-item"><img src={contribution} className="sidebar-icon"/>My Contributions</a>
                    <a href="#" className="list-group-item"><img src={favourites} className="sidebar-icon"/>Favourites</a>
                    <a href="#" className="list-group-item"><img src={history} className="sidebar-icon"/>Search History</a>
                    <a href="#" className="list-group-item"><img src={setting} className="sidebar-icon"/>Account Settings</a>
                </div>
            </div>
        );
    }
}

export default ProfileContent;