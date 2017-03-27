import React from 'react';
import ProfileContent from './ProfileContent';
import Dropzone from '../DropZone';

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const {user} = this.props.login;
        return(
            <div className="btn-on-map">
                <button className="btn btn-default" data-toggle="modal" data-target="#profile-modal">Profile</button>
                <div className="modal"  id="profile-modal">
                    <div className="col-md-3 sidebar">
                        <button data-dismiss="modal" className="btn btn-default btn-fold-sidebar">《 </button>
                        <div className="profile-section">
                            <Dropzone />
                            <div className="center-text">{user.email}</div>
                        </div>
                        <div className="profile-att">
                            <ProfileContent />
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

Profile.propTypes = {
    login: React.PropTypes.object.isRequired
}

export default Profile;