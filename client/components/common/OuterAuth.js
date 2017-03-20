import React from 'react';

class OuterAuth extends React.Component {
    onSuccess(googleUser) {
    console.log('Logged In');
}
    onFailure(error) {
        console.log('Login failed');
        console.log(error);
}
    renderButton() {
    gapi.signin2.render('g-signin2', {
        'scope': 'profile-email',
        'width': 360,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': this.onSuccess,
        'onfailure': this.onFailure
    });
}

    render() {
        return (
            <form className="form-horizontal">
                <h1 className="h-e-a-d-e-r-t-e-x-t" >Or...</h1>
                <div className="form-group">
                    <div className="g-signin2  btn-auth" data-onsuccess="onSignIn"></div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Sign in with Facebook</button>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">
                        {/*<img src="btn-twitter-signin.png" />*/}
                        <img src="https://g.twimg.com/dev/sites/default/files/images_documentation/sign-in-with-twitter-link.png" />
                    </button>
                </div>

            </form>
    );
    }
}

export default OuterAuth;