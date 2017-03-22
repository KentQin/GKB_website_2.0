import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import NavLogin from '../nav/NavLogin';

export default class MapBox extends React.Component {
    render() {
        return (
            <div>
                <NavLogin className="btn-nav-login"/>
                <ReactMapboxGl
                    style="mapbox://styles/mapbox/streets-v8"
                    accessToken="pk.eyJ1IjoicHJhaml0aCIsImEiOiJjajBmZnM2c3kwMXJ4Mnd1aW9ua295ajBjIn0.SYAYhOfs2Aq9JvBIPtV4dw"
                    containerStyle={{
                    height: "100vh",
                    width: "100vw"
                    }}>
                        <Layer
                          type="symbol"
                          id="marker"
                          layout={{ "icon-image": "marker-15" }}>
                          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                        </Layer>
                </ReactMapboxGl>
            </div>
        )
    }
}
