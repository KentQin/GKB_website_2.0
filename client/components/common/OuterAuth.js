import React from 'react';

class OuterAuth extends React.Component {
    render() {
        return (
            <form className="form-horizontal">
                <h1>Or...</h1>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Sign in with Google</button>
                 </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Sign in with Facebook</button>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Sign in with Twitter</button>
                </div>
            </form>
    );
    }
}

export default OuterAuth;