/*
 * This is a small react component, it takes a small block and provides a link back to the homepage
 * It is used by many components.
 */

import React from 'react';
import { Link } from 'react-router';

class LinkToHome extends React.Component{
    render(){
        return(
            <div className="btn-close-float">
                <Link to="/home" > x </Link>
            </div>
        );
    }
}

export default LinkToHome;
