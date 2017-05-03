import React from 'react';

class FavouriteItem extends React.Component{
    render(){
        return(
            <div className="favourite-item-box">
                <div className="favourite-img col-md-2">
                    <img scr={this.props.img}/>
                </div>
                <div className="col-md-offset-3 col-md-9 favourite-content">
                    <div className="favourite-content-title">
                    <h5>{this.props.location}</h5>
                    </div>

                    <div className="favourite-content-body">
                    <h6>{this.props.description}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default FavouriteItem;