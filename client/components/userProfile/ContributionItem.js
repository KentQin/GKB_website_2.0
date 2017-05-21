import React from 'react';
import {Link} from 'react-router';
var default_img =  '../img/default.jpg';

class ContributionItem extends React.Component{
    render(){
        // console.log("img "+this.props.img);
        var {img} = this.props;
        console.log("img type in favourite "+ img);
        if(typeof(img)=='undefined') {
            console.log("Favourtie default img needed");
            img = default_img;
        }

        return(
            <div className="favourite-item-box">
                <div className="favourite-img col-md-2">
                    <img className="stretch-img" src={img}/>
                </div>
                <div className="col-md-offset-3 col-md-9 favourite-content">
                    <Link className="favourite-content-title">
                        <h5>{this.props.location}</h5>
                    </Link>

                    <div className="favourite-content-body">
                        <h6>{this.props.description}</h6>
                    </div>

                </div>
            </div>
        );
    }
}

export default ContributionItem;