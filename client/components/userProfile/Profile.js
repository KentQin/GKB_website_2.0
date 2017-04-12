import React from 'react';
import ProfileContent from './ProfileContent';
import Dropzone from '../DropZone';
import {userProfilePicUploadRequest} from '../../actions/addUserProfilePicAction.js'
import { logout } from '../../actions/authAction';
import { connect } from 'react-redux'; 

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showProfile: false
        }
        this.showProfile = this.showProfile.bind(this);
        this.hideProfile = this.hideProfile.bind(this);
    }

    showProfile(){
        this.setState({
            showProfile: true
        })
    }


    hideProfile(){
        this.setState({
            showProfile: false
        })
    }

    render(){
        const { user } = this.props.login;
        const { userProfilePicUploadRequest } = this.props;
        return(
            <div>
                <button className="btn btn-default profile-btn-on-map  btn-unfold-sidebar"
                        data-toggle="modal" data-target="#profile-modal"> 》 </button>

                <div className="modal"  id="profile-modal">
                    <div className="col-md-3 sidebar">
                        <button data-dismiss="modal" className="btn btn-default btn-fold-sidebar">《 </button>
                        <div className="profile-section">
                            {/*<Dropzone userProfilePicUploadRequest={userProfilePicUploadRequest}/>*/}
                            <div className="center-text">{user.userName}</div>
                        </div>
                        <div className="profile-att">
                            <ProfileContent logout={ this.props.logout} hideProfile={this.hideProfile}/>
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

export default connect( null, { logout, userProfilePicUploadRequest}) (Profile);
