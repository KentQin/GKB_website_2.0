import React from 'react';
import photo from '../img/landing_page_photo.png';
import place from '../img/ic-place-black-48-dp.png';
import add from '../img/heart-light-filled-green.png';
import share from '../img/ic-share-black-48-dp.png';

class SearchResult extends React.Component{
    render(){
        return(
            <div>
                <div className="result-info-content">

                    <div className="photo-gallery result-info-content">
                      <img src={photo}/>
                    </div>

                    <div className="result-info result-info-content">
                        <div className="place-sec">
                            <img className="small-icon-rec" src={place}/>
                            Address
                        </div>

                        <div className="add-sec">
                            <img className="small-icon-sq" src={add}/>
                            Add to Favourites
                        </div>

                        <button className="share-sec">
                            <img className="small-icon-sq" src={share}/>
                            Share
                        </button>

                        <button>Hello</button>
                    </div>

                </div>

                    <div className="auto-comment">
                        <p className="comment">
                            A 2-storey building with a bright blue and green neon sign at the entrance
                        </p>
                    </div>

            </div>
        );
    }
}

export default SearchResult;