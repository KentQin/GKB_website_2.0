//var curl = require('curlrequest');
import React, {Component} from "react"
import { withGoogleMap, GoogleMap, InfoWindow, Marker, Polyline } from "react-google-maps";
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
import SearchHistory from '../userProfile/SearchHistoryPage';
import MyFavourites from '../userProfile/FavouritesPage';

//import GettingStartedGoogleMap from "./GMap"

class MapContainer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        markers: [{
          position: {
            lat: -37.8182711,
            lng: 144.9670618,
          }
        }],
        path: [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.142, lng: 178.431},
          {lat: -27.467, lng: 153.027}
        ],
        lat: "",
        longt: ""
      }
    }

    componentWillMount() {
      console.log("in componentDidMount woohooo");
      var pos_out;
      var this2 = this;

      var url = 'http://freegeoip.net/json/'
      var options = { url: url};

      var rest = require('rest');

      rest('http://freegeoip.net/json/').then(function(response) {
          var parsedData = JSON.parse(response.entity)
          console.log('response: ', parsedData.latitude);
           this2.setState({lat: parsedData.latitude, longt: parsedData.longitude})
      });
      // if (navigator.geolocation) {
      //   console.log("in navigator: ");
      //    navigator.geolocation.getCurrentPosition(function(position) {
      //       var pos = {
      //         lat: position.coords.latitude,
      //         lng: position.coords.longitude
      //       };
      //
      //
      //       this2.setState({lat: pos.lat, longt: pos.lng})
      //
      //       console.log("lat:  ",this2.state.lat);
      //       console.log("in MApContainer pos your location:", pos);
      //     }, function() {
      //       console.log("in geolocation");
      //     });
      // } else {
      //     // Browser doesn't support Geolocation
      //     console.log("false. in geolocation. Your browser doesn't support geolocation.")
      // }

    }

    render() {

      var lat;
      var longt;
      //console.log("lat: " + lat + "longt: " + longt);
      const {user} = this.props.login
      //var lat, longt
      if (user != null) {
        if (user.coords != null) {
            console.log("we are here in coords");
            if (typeof(user.coords.lat) == 'string' ) {
                lat = parseFloat(user.coords.lat)
                longt = parseFloat(user.coords.longt)
            } else {
                lat = (user.coords.lat)
                longt = (user.coords.longt)
            }
        } else {
            console.log("in else coords");
            lat = this.state.lat;
            longt = this.state.longt;
        }
      } else {
          console.log("in else12222 coords");
          lat = this.state.lat;
          longt = this.state.longt;
      }

      var markers= [];


      var path_arr = [];
      if (user != null) {
          if (user.directions != null) {
            var arr = [];
            var len = user.directions.length;
            for (var i = 0; i < len; i++) {
                arr.push({
                    lat: user.directions[i].lat(),
                    lng: user.directions[i].lng(),
                });
            }
            path_arr = arr.slice(0);
            markers = [
              {
                position: {
                  lat: lat,
                  lng: longt,
                }
              },
              {
                position: {
                  lat: user.directions[0].lat(),
                  lng: user.directions[0].lng(),
                }
              }
            ]
          } else {
            var path = [
              // {lat: lat, lng: longt},
              // {lat: 21.291, lng: -157.821},
              // {lat: -18.142, lng: 178.431},
              // {lat: -27.467, lng: 153.027}
            ]
            path_arr = path.slice(0);
            markers = [{
              position: {
                lat: lat,
                lng: longt,
              }
            }]
          }
      } else {
        var path = [
          // {lat: lat, lng: longt},
          // {lat: 21.291, lng: -157.821},
          // {lat: -18.142, lng: 178.431},
          // {lat: -27.467, lng: 153.027}
        ]
        path_arr = path.slice(0);
        markers = [{
          position: {
            lat: lat,
            lng: longt,
          }
        }]
      }

      console.log("path_Arr: ", path_arr);
      console.log("markers: ", markers);

      const GettingStartedGoogleMap = withGoogleMap(props => {
        return (
          <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={15}
            defaultCenter={{ lat: lat, lng: longt}}
            onClick={props.onMapClick}
          >


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
                  <Route path="searchhistory" component={SearchHistory}/>
                  <Route path="myfavourites" component={MyFavourites}/>
          </Router>


            {props.markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                onRightClick={() => props.onMarkerRightClick(marker)}
              />
            ))}

            <Polyline
              onClick={_.noop}
              onRightClick={_.noop}
              onDragStart={_.noop}
              path={props.path}
            />

          </GoogleMap>
        )
       }
      )

      return (

        <div style={{height: '100%', width: '100%', position:'absolute'}}>
          <GettingStartedGoogleMap
              containerElement={
                <div style={{height: '100%', width: '100%'}} />
              }
              mapElement={
                <div style={{ height: "100%" }} />
              }
              markers={markers}
              path={path_arr}
          />
        </div>
      )
    }

}

//export default MapContainer
MapContainer.propTypes = {
    login: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps, {})(MapContainer);
