import React from 'react';
import { browserHistory } from 'react-router';
import * as firebase from "firebase";
import googleLogin from '../img/btn-google-sign.png';
import twitterLogin from '../img/btn-twitter-signin.png';


class OuterAuth extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            // identifier:'',
            // password:'',
            // errors: {}
        }

        this.loginFacebook = this.loginFacebook.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);
        // this.onChange = this.onChange.bind(this);
        // this.isValid = this.isValid.bind(this);
    }

    loginFacebook(evt){
        evt.preventDefault();
            // this.setState({ errors: {}}).then(
            //     (res) => this.context.router.push('/signup'),
            //     (err) => this.setState({ errors: err.response.data.errors})
            // );
            var config = {
              apiKey: "AIzaSyDrLq-l8Ae6iF9g2JR_aegLpD7mL6QPZVo",
              authDomain: "gkbwebsite.firebaseapp.com"
            };
            firebase.initializeApp(config);
            var provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithPopup(provider)

           .then(function(result) {
              var token = result.credential.accessToken;
              var user = result.user;

              console.log(token)
              console.log(user)
           }).catch(function(error) {
              console.log(error.code);
              console.log(error.message);
           });
            //browserHistory.push('/signup');
    }

    loginGoogle(evt) {
          evt.preventDefault();

          var config = {
            apiKey: "AIzaSyDrLq-l8Ae6iF9g2JR_aegLpD7mL6QPZVo",
            authDomain: "gkbwebsite.firebaseapp.com"
          };

          firebase.initializeApp(config);

          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth()

         .signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(token)
            console.log(JSON.stringify(user));
         }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)
         });
    }

    render() {
        return (
            <form className="form-horizontal">
                <h1 className="h-e-a-d-e-r-t-e-x-t" >Or...</h1>
                <div className="form-group">
                  <button type="submit" className="btn btn-default" onClick={this.loginGoogle}>
                      <img src={googleLogin} className="auth-login-img"/>
                  </button>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default" onClick={this.loginFacebook}>Sign in with Facebook</button>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">
                        <img src={twitterLogin} className="auth-login-img"/>
                    </button>
                </div>

            </form>
    );
    }
}

export default OuterAuth;
