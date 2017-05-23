import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import photoDef from '../img/landing_page_photo.png';
import place from '../img/ic-place-black-48-dp.png';
import add from '../img/heart-light-filled-green.png';
import share from '../img/ic-share-black-48-dp.png';
import {Link} from 'react-router';
import config from '../../../server/config.js';

class SearchResultHead extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          searchStr: "",
          errors: {}
        }
        this.addFavorite = this.addFavorite.bind(this);
        this.closeSearchResult = this.closeSearchResult.bind(this);
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
            user_id: user._id,
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
            console.log("addFavorite failed");
            //console.log(err.response.data);
            this.setState({ errors: err.response.data});
            console.log("this.state.errors: ", this.state.errors);
        });
    }

    closeSearchResult(e){
        this.props.hideSearchResult();
    }

    render(){

        var  autoComment = this.props.autoComment;
        const location = this.props.location;
        var imgSrc = this.props.photo;
        if(imgSrc == '' || imgSrc == null){
            // imgSrc = photoDef
            imgSrc = "http://www.mozmagic.com/files/assets/img/ui/no-image-available.png"
        } else if (imgSrc.indexOf("https") < 0) {
            // result is from google place photo => photo_ref
            imgSrc = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + imgSrc + "&key=" + config.googlePlaceApiKey
            // var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + encodeRes + "&location=" + pos.lat +"," + pos.lng + "&radius=20&key=" + config.googlePlaceApiKey
        }
        return(
            <div>
                {/*<button className="btn btn-default profile-btn-on-map  btn-unfold-sidebar"*/}
                        {/*data-toggle="modal" data-target="#search-result-modal"> 》 </button>*/}

                <div id="search-result-modal">
                    <div className="search-result-bar">
                        {/*<button data-dismiss="modal" className="btn btn-default btn-fold-sidebar">《 </button>*/}
                        <div className="search-result-content">
                            <div className="close_search" > <button className="btn" onClick={this.closeSearchResult}>《 </button></div>
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
                                <Link className="add-sec" onClick={this.addFavorite}>
                                    <img className="small-icon-sq" src={add} />
                                    Add to Favourites
                                </Link>

                                <Link className="share-sec">
                                    <img className="small-icon-sq" src={share}/>
                                    Share
                                </Link>
                            </div>
                            </div>

                            <div className="auto-comment">
                                    {autoComment}
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
