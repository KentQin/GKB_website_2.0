import React from 'react';
import OverviewContent from './OverviewContent';
import LinkToHome from './../common/LinkToHome';
import PasswordContent from './PasswordContent';

class AccountSettingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showOverview:true,
            showPassword:false,
            showNotifications:false
        }
        this.showOverview= this.showOverview.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.showNotifications = this.showNotifications.bind(this);

    }

    showOverview(){
        this.setState({
            showOverview: true,
            showPassword: false,
            showNotifications: false
        })
    }

    showPassword(){
        this.setState({
            showPassword: true,
            showOverview: false,
            showNotifications:false
        })
    }

    showNotifications(){
        this.setState({
            showNotifications: true,
            showOverview:false,
            showPassword:false
        })
    }

    render(){
        return(
            <div className="container float_on_the_map">
                <LinkToHome/>
                <div className="row centered ">
                    <div className="col-md-2 col-md-offset-3 welcome-block setting-menu-block window-drop-shadow">
                        <div className="list-group setting-menu">
                            <h3 className="welcome-title">Account Setting</h3>

                            <a href="#" className="list-group-item" onClick={this.showOverview}>Overview</a>
                            <a href="#" className="list-group-item" onClick={this.showPassword}>Password</a>
                            <a href="#" className="list-group-item" onClick={this.showNotifications}>Notifications</a>

                        </div>
                    </div>

                    <div className="col-md-4 login-block window-drop-shadow">
                        {this.state.showOverview && <OverviewContent />}
                        {this.state.showPassword && <PasswordContent />}
                    </div>

                </div>
            </div>

        );
    }
}


export default AccountSettingPage;