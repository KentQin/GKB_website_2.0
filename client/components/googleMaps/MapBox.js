import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import NavLogin from '../nav/NavLogin';
import WelcomeForm from './../welcome/WelcomeForm'


export default class MapBox extends React.Component {
    render() {
        return (
            <div>
                <ReactMapboxGl
                    style="mapbox://styles/mapbox/streets-v8"
                    accessToken="pk.eyJ1IjoicHJhaml0aCIsImEiOiJjajBmZnM2c3kwMXJ4Mnd1aW9ua295ajBjIn0.SYAYhOfs2Aq9JvBIPtV4dw"
                    center={[-122.420679, 37.772537]}
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}>

                    <WelcomeForm />
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
