import React from 'react';
import ProfileContent from './ProfileContent';
import Dropzone from '../DropZone';
import {userProfilePicUploadRequest} from '../../actions/addUserProfilePicAction.js'
import { connect } from 'react-redux'; 

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const { user } = this.props.login;
        const { userProfilePicUploadRequest } = this.props;
        return(
            <div className="btn-on-map">
                <button className="btn btn-default" data-toggle="modal" data-target="#profile-modal">Profile</button>
                <div className="modal"  id="profile-modal">
                    <div className="col-md-3 sidebar">
                        <button data-dismiss="modal" className="btn btn-default btn-fold-sidebar">《 </button>
                        <div className="profile-section">
                            <Dropzone userProfilePicUploadRequest={userProfilePicUploadRequest}/>
                            <div className="center-text">{user.userName}</div>
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
    login: React.PropTypes.object.isRequired,
    userProfilePicUploadRequest: React.PropTypes.func.isRequired
}

export default connect( null, { userProfilePicUploadRequest}) (Profile);
