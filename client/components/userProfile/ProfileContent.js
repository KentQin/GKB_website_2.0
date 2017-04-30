import React from 'react';
import setting from './../img/account-settings.png';
import contribution from './../img/contributions.png';
import favourites from './../img/heart.png';
import history from './../img/history.png';
import { Link } from 'react-router';

class ProfileContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.logout = this.logout.bind(this);
    }

    logout(e){
        e.preventDefault();
        this.props.hideProfile();
        //console.log(this.props);
        this.props.hideProfile();
        this.props.logout();
    }

    render(){
        return(
            <div>
                <div className="list-group">
                    <a href="#" className="list-group-item"><img src={contribution} className="sidebar-icon"/>My Contributions</a>
                    <a href="#" className="list-group-item"><img src={favourites} className="sidebar-icon"/>Favourites</a>
                    <Link to ='/searchhistory' className="list-group-item"><img src={history} className="sidebar-icon"/>Search History</Link>
                    <Link to="/accountsetting" className="list-group-item"><img src={setting} className="sidebar-icon"/>Account Settings</Link>
                    <a href="#" onClick={this.logout} data-dismiss="modal" className="list-group-item"><img src={history} className="sidebar-icon"/>Logout</a>
                </div>
            </div>
        );
    }
}

ProfileContent.PropTypes={
    logout: React.PropTypes.func.isRequired
}

export default ProfileContent;