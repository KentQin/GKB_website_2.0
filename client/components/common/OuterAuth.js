import React from 'react';
import * as firebase from "firebase";


class OuterAuth extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            firebaseInitial: false
        }

        this.loginFacebook = this.loginFacebook.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);
        this.loginTwitter = this.loginTwitter.bind(this);

        this.config = {
          apiKey: "AIzaSyDrLq-l8Ae6iF9g2JR_aegLpD7mL6QPZVo",
          authDomain: "gkbwebsite.firebaseapp.com"
        };


        if (firebase.apps.length) {
            firebase.app().delete().then(() => {
            });
        }
        console.log(firebase.apps.length);

        firebase.initializeApp(this.config);
        console.log(firebase.apps.length);

        // this.onChange = this.onChange.bind(this);
        // this.isValid = this.isValid.bind(this);
    }

    loginFacebook(evt){
        evt.preventDefault();


        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(token);
                console.log(user);

                firebase.app().delete().then(() => {
                    console.log("[DEFAULT] App is Gone Now");

                });
                this.setState({firebaseInitial : false});

           }).catch(function(error) {
                console.log(error.code);
                console.log(error.message);

           });

    }

    loginGoogle(evt) {
        evt.preventDefault();


        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;

                console.log(token)
                console.log(JSON.stringify(user));

                firebase.app().delete().then(() => {
                    console.log("[DEFAULT] App is Gone Now");

                });
                this.setState({firebaseInitial : false});

         }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)
         });

    }

    loginTwitter(evt) {
        evt.preventDefault();


        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;

                console.log(token)
                console.log(JSON.stringify(user));

                firebase.app().delete().then(() => {
                    console.log("[DEFAULT] App is Gone Now");

                });
                this.setState({firebaseInitial : false});

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
                    <button type="submit" className="btn btn-block btn-social btn-twitter" onClick={this.loginTwitter}>
                        <span className="fa fa-twitter"></span> Sign in with Twitter
                    </button>
                </div>

            </form>
    );
    }
}

export default OuterAuth;
