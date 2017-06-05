import React from 'react';
import ProfileContent from './ProfileContent';
import Dropzone from '../DropZone';

import {addProImgAction} from '../../actions/addProImgAction.js'
import {userProfilePicUploadRequest} from '../../actions/addUserProfilePicAction.js'
import { logout } from '../../actions/authAction';
import { connect } from 'react-redux';

/*
 * This component renders 2 components to form the complete user profile
 * This is used by map
 * It connects to redux store and pass the data as props to other components
 */
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
        const { addProImgAction } = this.props;
        return(
            <div  className ="no-click-through">
                <button className="btn btn-default profile-btn-on-map  btn-unfold-sidebar"
                        data-toggle="modal" data-target="#profile-modal"> 》 </button>

                <div className="modal"  id="profile-modal">
                    <div className="col-md-3 sidebar">
                        <button data-dismiss="modal" className="btn btn-default btn-fold-sidebar">《 </button>
                        <div className="profile-section">
                            <Dropzone user = {user} addProImgAction={addProImgAction}/>

                            <div className="center-text">{user.userName}</div>

                            <div className="profile-att">
                                <ProfileContent userId = {user._id} logout={ this.props.logout} hideProfile={this.hideProfile}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}

Profile.propTypes = {
    login: React.PropTypes.object.isRequired,
    addProImgAction: React.PropTypes.func.isRequired
}

export default connect( null, { logout, userProfilePicUploadRequest, addProImgAction}) (Profile);

