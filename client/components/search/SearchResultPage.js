import React from 'react';
import photo from '../img/landing_page_photo.png';
import place from '../img/ic-place-black-48-dp.png';
import add from '../img/heart-light-filled-green.png';
import share from '../img/ic-share-black-48-dp.png';


class SearchResultPage extends React.Component{
    render(){
        return(
            <div>
                <button className="btn btn-default profile-btn-on-map  btn-unfold-sidebar"
                        data-toggle="modal" data-target="#search-result-modal"> 》 </button>

                <div className="modal"  id="search-result-modal">
                    <div className="col-md-4 col-md-offset-2 search-result-bar">
                        <button data-dismiss="modal" className="btn btn-default btn-fold-sidebar">《 </button>
                        <div className="search-result-content">
                            <div className="photo-gallery">
                                <img src={photo}/>
                            </div>

                            <div className="search-result-right">
                            <div className="result-info">
                                <img className="small-icon-rec icon-place" src={place}/>
                                <div className="place-sec">
                                    <p>First line,</p>
                                    <p>Second line second line,</p>
                                    <p>Third line third</p>
                                </div>
                            </div>
                            <div className="result-info result-btn">
                                <div className="add-sec">
                                    <img className="small-icon-sq" src={add}/>
                                    Add to Favourites
                                </div>

                                <div className="share-sec">
                                    <img className="small-icon-sq" src={share}/>
                                    Share
                                </div>
                            </div>
                        </div>
                    </div>

                        <p className="auto-comment">
                            A 2-storey building with a bright blue and green neon sign at the entrance
                        </p>
                    </div>

                </div>
            </div>

        );
    }
}

export default SearchResultPage;