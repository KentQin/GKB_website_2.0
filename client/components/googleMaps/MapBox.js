import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import LoginPage from '../login/LoginPage';
import SignupPage from '../signup/SignupPage';
import ResetPasswordPage from '../resetpwd/ResetPasswordPage';
import EmailSentPage from '../resetpwd/EmailSentPage';
import NewPwdPage from '../newpassword/NewPwdPage';
import WelcomePage from '../welcome/WelcomePage'
import HomePage from '../home/HomePage'
import {connect} from 'react-redux'
import AccountSetting from '../userProfile/AccountSettingPage';



class MapBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }

        //this.hideWelcomeFormShowProfile = this.hideWelcomeFormShowProfile.bind(this);
    }

    // hideWelcomeFormShowProfile(){
    //     this.setState({
    //     })
    // }

    // in componentWillMount stage, if justSignup, let user add username, or go to profile
    // componentWillMount(){
    //     const { justSignup } = this.props.login;
    //     if (!justSignup){
    //         this.hideWelcomeFormShowProfile();
    //     }
    // }

    render() {
        const {user} = this.props.login
        var lat, longt
<<<<<<< HEAD
        if (user.coords != null) {
            console.log("we are here in coords");
            lat = (user.coords.lat)
            longt = (user.coords.longt)
        } else {
            console.log("in else coords");
=======
        if (user != null) {
          if (user.coords != null) {
              console.log("we are here in coords");
              lat = (user.coords.lat)
              longt = (user.coords.longt)
          } else {
              console.log("in else coords");
              lat = 37.772537
              longt = -122.420679
          }
        } else {
            console.log("in else12222 coords");
>>>>>>> 77748fcb72c9d579b6ce9d8f97dece457a86020e
            lat = 37.772537
            longt = -122.420679
        }
        console.log("lat: " + lat + "longt: " + longt);
        return (
            <div>
                {/*<NavLogin className="btn-nav-login"/>*/}
                <ReactMapboxGl
                    style="mapbox://styles/mapbox/streets-v8"
                    accessToken="pk.eyJ1IjoicHJhaml0aCIsImEiOiJjajBmZnM2c3kwMXJ4Mnd1aW9ua295ajBjIn0.SYAYhOfs2Aq9JvBIPtV4dw"
                    center={[longt, lat]}
                    zoom={[13]}
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>

                    <Router history={browserHistory}>
                        <Route path="/" component={HomePage}/>
                            <Route path="home" component={HomePage}/>
                            <Route path="login" component={LoginPage}/>
                            <Route path="signup" component={SignupPage}/>
                            <Route path="resetpassword" component={ResetPasswordPage}/>
                            <Route path="emailsentpage" component={EmailSentPage}/>
                            <Route path="welcome" component={WelcomePage}/>
                            <Route path="newpwd" component={NewPwdPage}/>
                            <Route path="newpwd(/:email)" component={NewPwdPage}/>
                            <Route path="accountsetting" component={AccountSetting}/>
                    </Router>


                        <Layer
                          type="symbol"
                          id="marker"
                          layout={{ "icon-image": "marker-15" }}>
                          <Feature coordinates={[longt, lat]}/>
                        </Layer>

                </ReactMapboxGl>
            </div>
        )
    }
}

MapBox.propTypes = {
    login: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps, {})(MapBox);
