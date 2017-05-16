import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import photoDef from '../img/landing_page_photo.png';
import place from '../img/ic-place-black-48-dp.png';
import add from '../img/heart-light-filled-green.png';
import share from '../img/ic-share-black-48-dp.png';



class SearchResultHead extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          searchStr: "",
          errors: {}
        }
        this.addFavorite = this.addFavorite.bind(this);
    }

    addFavorite(e) {
        console.log("In function addFavorite");
        console.log("In add favorites: location: ", this.props.location)
        console.log("this.props.searchResult: ", this.props.searchResult);
        var location = this.props.location;
        var photo = this.props.photo
        const {user} = this.props.login;
        var description = {
            location : location,
            photo : photo,
            coords: user.coords,
            user: user,
            type: this.props.searchResult.searchResultPageConfig.type
        }
        // console.log(this.props);

        this.props.addToFavoritesAction(description).then(
        //     (res) = {
        //         console.log("we are back in addToFavoritesAction clientside")
        //     },
        //     (err) = {
        //         console.log("we are back in addToFavoritesAction clientside, err")
        //     }
        // );
        (res) => {
            console.log("we are back in addToFavoritesAction clientside");
            //this.context.router.push('/home')
        },
        // if server response any error message, set it into state errors
        (err) => {
            console.log("Login Form: login failed");
            //console.log(err.response.data);
            this.setState({ errors: err.response.data});
            console.log("this.state.errors: ", this.state.errors);
        });
    }

    render(){

        const autoComment = this.props.autoComment;
        const location = this.props.location;
        var imgSrc = this.props.photo;
        if(imgSrc == ''){
            imgSrc = photoDef
        }
        return(
            <div>
                {/*<button className="btn btn-default profile-btn-on-map  btn-unfold-sidebar"*/}
                        {/*data-toggle="modal" data-target="#search-result-modal"> 》 </button>*/}

                <div id="search-result-modal">
                    <div className="search-result-bar">
                        {/*<button data-dismiss="modal" className="btn btn-default btn-fold-sidebar">《 </button>*/}
                        <div className="search-result-content">
                            <div className="photo-gallery col-md-5">
                                <img src={imgSrc}/>

                            </div>

                            <div className="search-result-right">
                                <div className="result-info">
                                    <img className="small-icon-rec icon-place" src={place}/>
                                    <div className="place-sec">
                                        <p>{location}</p>
                                        {/*<p>Street info</p>*/}
                                        {/*<p>City and post code</p>*/}
                                    </div>
                                </div>
                            <div className="result-info result-btn">
                                <div className="add-sec">
                                    <img className="small-icon-sq" src={add} onClick={this.addFavorite}/>
                                    Add to Favourites
                                </div>

                                <div className="share-sec">
                                    <img className="small-icon-sq" src={share}/>
                                    Share
                                </div>
                            </div>
                            </div>

                            <div className="auto-comment">
                                <p>
                                    {autoComment}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

// SearchResultHead.propTypes = {
//     // autoComment: React.PropTypes.string.isRequired,
//     // location: React.PropTypes.string.isRequired
// }
//
// export default SearchResultHead;


SearchResultHead.propTypes = {
    addToFavoritesAction: React.PropTypes.func.isRequired,
    login: React.PropTypes.object.isRequired,
    // location: React.PropTypes.String
    // photo: React.PropTypes.String
}

SearchResultHead.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ',state.login);
    return {
        login: state.login,
        searchResult: state.searchResult
    };
}

export default connect(mapStateToProps, null)(SearchResultHead);
