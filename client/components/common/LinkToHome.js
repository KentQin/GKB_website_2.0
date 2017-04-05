import React from 'react';
import { Link } from 'react-router';

class LinkToHome extends React.Component{
    render(){
        return(
            <div className="btn-close-float">
                <Link to="/" > x </Link>
            </div>
        );
    }
}

export default LinkToHome;