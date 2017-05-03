import React, {Component} from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"
import "react-google-places-suggest/lib/index.css"
import { connect } from 'react-redux';

const MY_API_KEY = "AIzaSyBYNqtR2RJBsq44d31RZe2Znch8_SX4RXM"

class MyGoogleSuggest extends Component {
  // state = {
  //   search: "",
  //   selectedCoordinate: null,
  // }

  constructor(props){
      super(props);
      this.state = {
        searchStr: "",
        selectedCoordinate: {},
        errors: {}
      }
      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleSelectSuggest = this.handleSelectSuggest.bind(this);
      this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    // This will directly go to the back end and search for coordinates in google db and jena
    // query apache jena database, if not then go with google.
    const {user} = this.props.login
    // console.log("search term to jena: ", suggest.terms[0].value);
    this.setState({errors: {} });
    var toSend;
    if (user.id == null) {
      toSend = {
        searchStr: this.state.searchStr,
        id: null,
        button:true
      }
    } else {
      toSend = {
        searchStr: this.state.searchStr,
        id: user.id,
        button:true
      }
    }
    this.props.searchBarRequest(toSend).then(
        (res) => {
            console.log("we are back in searchBar clientside button");
        },
        // if server response any error message, set it into state errors
        (err) => {
            console.log("err.response.data: ", err.response.data);
            // this.setState({searchStr: this.state.searchStr, selectedCoordinate: coordinate}, function() {
            //   console.log("suggest: ", suggest);
            //   console.log("coordinates: ", coordinate);
            //   console.log("selectedCoordinate", this.state.selectedCoordinate);
            //   console.log("place details in my code: ", place);
            //   if (place.photos) {
            //     console.log("photo1: ", place.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35}));
            //   }
            //   console.log("directionsResponse in my code: ", directionsResponse.routes[0].overview_path);
            //   console.log("directionsResponse in my code lat: ", directionsResponse.routes[0].overview_path[0].lat());
            //   // const {user} = this.props.login;
            //   console.log("inside suggestSelect :", user);
            //   var userData = {
            //     email: user.email,
            //     userName: user.userName,
            //     accountType: user.accountType,
            //     id: user.id,
            //     coords: {
            //       lat: this.state.selectedCoordinate.latitude,
            //       longt: this.state.selectedCoordinate.longitude
            //     },
            //     directions:directionsResponse.routes[0].overview_path,
            //   }
            //
            //   this.props.updateCoordsRequest(userData);
            // })
        }
    );
  }

  handleSearchChange(e) {
    this.setState({searchStr: e.target.value})
  }

  handleSelectSuggest(suggest, coordinate, place, directionsResponse) {
      // query apache jena database, if not then go with google.
      const {user} = this.props.login
      console.log("search term to jena: ", suggest.terms[0].value);
      this.setState({errors: {} });
      var toSend;
      if (user.id == null) {
        toSend = {
          searchStr: suggest.terms[0].value,
          id: null,
          fulladdr: suggest.description
        }
      } else {
        toSend = {
          searchStr: suggest.terms[0].value,
          id: user.id,
          fulladdr: suggest.description
        }
      }
      this.props.searchBarRequest(toSend).then(
          // after server response then...
          // if successful
          //var userUpdated = this.props.login.user;
          (res) => {
              console.log("we are back in searchBar clientside");
              //console.log("ins ide suggestSelect :", this.props.login);
              // var userData = {
              //   email: this.props.login.user.email,
              //   userName: this.props.login.user.userName,
              //   accountType: this.props.login.user.accountType,
              //   id: this.props.login.user.id,
              //   coords: {
              //     lat: this.props.login.user.coords.lat,
              //     longt: this.props.login.user.coords.longt
              //   },
              //   directions:[],
              // }

              //this.props.updateCoordsRequest(userData);
              //this.context.router.push('/home')
          },
          // if server response any error message, set it into state errors
          (err) => {
              var photo = "";
              console.log("in err");
              console.log("err.response.data: ", err.response.data);
              this.setState({searchStr: suggest.description, selectedCoordinate: coordinate}, function() {
                console.log("suggest: ", suggest);
                console.log("coordinates: ", coordinate);
                console.log("selectedCoordinate", this.state.selectedCoordinate);
                console.log("place details in my code: ", place);
                if (place.photos) {
                  console.log("photo1: ", place.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35}));
                  photo = place.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
                } else {
                  photo = ""
                }
                console.log("directionsResponse in my code: ", directionsResponse.routes[0].overview_path);
                console.log("directionsResponse in my code lat: ", directionsResponse.routes[0].overview_path[0].lat());
                // const {user} = this.props.login;
                console.log("inside suggestSelect :", user);
                var userData = {
                  email: user.email,
                  userName: user.userName,
                  accountType: user.accountType,
                  proImg: user.proImg,
                  id: user.id,
                  coords: {
                    lat: this.state.selectedCoordinate.latitude,
                    longt: this.state.selectedCoordinate.longitude
                  },
                  directions:directionsResponse.routes[0].overview_path,
                  placeFullAddr:suggest.description,
                  placePhoto: photo
                }

                this.props.updateCoordsRequest(userData);
              })
          }
      );
  }

  render() {
    const {searchStr} = this.state
    const {googleMaps} = this.props
//{errors.searchBar && <span className="help-block">{errors.searchBar}</span> }

    return (
      <GooglePlacesSuggest
        googleMaps={googleMaps}
        onSelectSuggest={this.handleSelectSuggest}
        search={searchStr}
      >


        <div className="col-lg-6">
            <div className="input-group">
                  <input
                    type="text"
                    value={searchStr}
                    className="form-control"
                    placeholder="Search a location"
                    onChange={this.handleSearchChange}
                  />

                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.buttonClick}>Go!</button>
                  </span>
            </div>
        </div>

      </GooglePlacesSuggest>
    )
  }
}

MyGoogleSuggest.propTypes = {
    searchBarRequest: React.PropTypes.func.isRequired,
    login: React.PropTypes.object.isRequired,
    updateCoordsRequest: React.PropTypes.func.isRequired
}

MyGoogleSuggest.contextTypes = {
    router: React.PropTypes.object
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ',state.login);
    console.log('mapStateToPropsCoords: ',state.coords);
    return {
        login: state.login,
        coords: state.coords
    };
}

// GoogleMapLoader(MyGoogleSuggest, {
//   libraries: ["places"],
//   key: MY_API_KEY,
// })

export default connect(mapStateToProps, {})(GoogleMapLoader(MyGoogleSuggest, {
  libraries: ["places"],
  key: MY_API_KEY,
}));
