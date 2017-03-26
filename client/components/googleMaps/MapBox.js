import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import WelcomeForm from './../welcome/WelcomeForm'
import { connect } from 'react-redux';


class MapBox extends React.Component {
    render() {
        // const { user } = this.props.login;
        // console.log('this.props.login: ',user);
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

                    <WelcomeForm login={this.props.login}/>
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