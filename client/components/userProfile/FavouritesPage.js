import React from 'react';
import Favourites from './Favourites';

/*
 * This component renders favourite page
 * This is used by profile
 */

class FavouritesPage extends React.Component{
    render(){
        return(
            <div className="container">
                <Favourites/>
            </div>

        );
    }
}

export default FavouritesPage;