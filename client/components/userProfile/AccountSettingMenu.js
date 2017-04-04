import React from 'react';

class AccountSettingMenu extends React.Component{
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
            showNotifications:false
        })
    }



    render(){
        return(
            <div className="">
                <div className="list-group">
                    <h3>Account Setting</h3>
                    <a href="#" className="list-group-item" onClick={this.showOverview}>Overview</a>
                    <a href="#" className="list-group-item" onClick={this.showPassword}>Password</a>
                    <a href="#" className="list-group-item" onClick={this.showNotifications}>Notifications</a>
                </div>
            </div>
        );
    }
}

export default AccountSettingMenu;