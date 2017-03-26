import React from 'react';
import { browserHistory } from 'react-router';
import firebase from '../../../server/firebase';
import Dropzone from '../DropZone'


class OuterAuth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            accountType: '',
            errors: {}
        }

        this.onLoginFacebook = this.onLoginFacebook.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);
        this.loginTwitter = this.loginTwitter.bind(this);
        this.callAction = this.temp.callAction(this);
    }

    callAction(user, type) {

        this.setState({
            email: user.email,
            password: '',
            accountType: type
        });

        this.props.userLoginSocialRequest(this.state).then(
            // after server response then...
            // if successful
            (res) => {
                //this.context.router.push('/welcome')
                console.log("you are here");
                this.context.router.push('/welcome')
            },
            // if server response any error message, set it into state errors
            (err) => {
                this.setState({ errors: err.response.data})
                console.log("you are here err");
            });
    }

    onLoginFacebook(evt){

        evt.preventDefault();

        var object = this;
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)

            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;

                console.log(token);
                console.log(user.email);
                object.callAction(user, 'facebook');

            }).catch(function(error) {
            console.log(error.code);
            console.log(error.message);
        });
        //browserHistory.push('/signup');
    }

    loginGoogle(evt) {
        evt.preventDefault();

        var object = this;
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()

            .signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(token)
            console.log(JSON.stringify(user));
            object.callAction(user, 'google');

        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)
        });
    }

    loginTwitter(evt) {
        evt.preventDefault();

        var object = this;
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth()

            .signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(token)
            console.log(JSON.stringify(user));
            object.callAction(user, 'twitter');

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
                    <button type="submit" className="btn btn-block btn-social btn-facebook" onClick={this.onLoginFacebook}>
                        <span className="fa fa-facebook"></span> Sign in with Facebook
                    </button>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block btn-social btn-twitter" onClick={this.loginTwitter}>
                        <span className="fa fa-twitter"></span> Sign in with Twitter
                    </button>
                </div>
                <div className="form-group">
                    <Dropzone />
                </div>

            </form>
        );
    }
}

OuterAuth.propTypes = {
    userLoginSocialRequest: React.PropTypes.func.isRequired
}

OuterAuth.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default OuterAuth;