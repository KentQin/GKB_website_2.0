import React from 'react';
import { browserHistory } from 'react-router';
import * as firebase from "firebase";


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
        this.loginTwitter = this.loginTwitter.bind(this);

        this.config = {
          apiKey: "AIzaSyDrLq-l8Ae6iF9g2JR_aegLpD7mL6QPZVo",
          authDomain: "gkbwebsite.firebaseapp.com"
        };
        firebase.initializeApp(this.config);
        this.provider = new firebase.auth.FacebookAuthProvider();
        // this.onChange = this.onChange.bind(this);
        // this.isValid = this.isValid.bind(this);
    }

    loginFacebook(evt){
        evt.preventDefault();
            // this.setState({ errors: {}}).then(
            //     (res) => this.context.router.push('/signup'),
            //     (err) => this.setState({ errors: err.response.data.errors})
            // );
            // var config = {
            //   apiKey: "AIzaSyDrLq-l8Ae6iF9g2JR_aegLpD7mL6QPZVo",
            //   authDomain: "gkbwebsite.firebaseapp.com"
            // };
            // firebase.initializeApp(config);

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

          // var config = {
          //   apiKey: "AIzaSyDrLq-l8Ae6iF9g2JR_aegLpD7mL6QPZVo",
          //   authDomain: "gkbwebsite.firebaseapp.com"
          // };
          //
          // firebase.initializeApp(config);

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

    loginTwitter(evt) {
          evt.preventDefault();

          // var config = {
          //   apiKey: "AIzaSyDrLq-l8Ae6iF9g2JR_aegLpD7mL6QPZVo",
          //   authDomain: "gkbwebsite.firebaseapp.com"
          // };
          //
          // firebase.initializeApp(config);

          var provider = new firebase.auth.TwitterAuthProvider();
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
                  <button type="submit" className="btn btn-block btn-social btn-google" onClick={this.loginGoogle}>
                      <span className="fa fa-google"></span> Sign in with Google
                  </button>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block btn-social btn-facebook" onClick={this.loginFacebook}>
                        <span className="fa fa-facebook"></span> Sign in with Facebook
                    </button>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block btn-social btn-twitter">
                        <span className="fa fa-twitter"></span> Sign in with Twitter
                    </button>
                </div>

            </form>
    );
    }
}

export default OuterAuth;
