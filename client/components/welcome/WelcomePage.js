import React from 'react';
import WelcomeForm from './WelcomeForm';

class WelcomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="row centered">
                    <div className="col-md-6 col-md-offset-3 email-sent-block">
                        <WelcomeForm/>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;
