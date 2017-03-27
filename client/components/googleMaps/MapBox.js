import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import NavLogin from '../nav/NavLogin';
import WelcomeForm from './../welcome/WelcomeForm'
import M from './../modal/M'
import LoginPage from './../login/LoginPage'
import Profile from '../userProfile/Profile';
import { connect } from 'react-redux';


class MapBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showWelcomeForm: true,
            showProfile: false
        }

        this.hideWelcomeFormShowProfile = this.hideWelcomeFormShowProfile.bind(this);
    }

    hideWelcomeFormShowProfile(){
        this.setState({
            showWelcomeForm: false,
            showProfile: true
        })
    }

    // in componentWillMount stage, if justSignup, let user add username, or go to profile
    componentWillMount(){
        const { justSignup } = this.props.login;
        if (!justSignup){
            this.hideWelcomeFormShowProfile();
        }
    }

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

                    {this.state.showWelcomeForm && <WelcomeForm login={this.props.login} hideWelcomeFormShowProfile={this.hideWelcomeFormShowProfile} />}
                    {this.state.showProfile && <Profile login={this.props.login} />}


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

MapBox.propTypes = {
    login: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ',state.login);
    return {
        login: state.login
    };
}

export default connect(mapStateToProps)(MapBox);