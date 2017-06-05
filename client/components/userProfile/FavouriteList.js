import React from 'react';
import FavouriteItem from './FavouriteItem';
import testImg from './../img/default-profile-picture.jpg';
import {connect} from 'react-redux';

class FavouriteList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        const {user} = this.props.login;
        var items = [];
        var {favorites} = this.props.login.user;

        if (typeof(favorites) != 'undefined') {
            for (var i = 0; i < favorites.length; i++) {
                console.log("Processing "+i);
                items.push(<div><FavouriteItem location={favorites[i].searchStr}
                                               img={favorites[i].image}
                                               description={favorites[i].description}/>
                    </div>
                );
            }
        }else{
            console.log("Empty array");
        }

        return(
            <div className="favourite-list-block">
                {items}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps,null)(FavouriteList);
