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

import Profile from '../userProfile/Profile';


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



        return (
            <div>
                {/*<NavLogin className="btn-nav-login"/>*/}
                <ReactMapboxGl
                    style="mapbox://styles/mapbox/streets-v8"
                    accessToken="pk.eyJ1IjoicHJhaml0aCIsImEiOiJjajBmZnM2c3kwMXJ4Mnd1aW9ua295ajBjIn0.SYAYhOfs2Aq9JvBIPtV4dw"
                    center={[-122.420679, 37.772537]}
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
                    </Router>

                        <Layer
                          type="symbol"
                          id="marker"
                          layout={{ "icon-image": "marker-15" }}>
                          <Feature coordinates={[-122.420679, 37.772537]}/>
                        </Layer>

                </ReactMapboxGl>
            </div>
        )
    }
}

export default MapBox;