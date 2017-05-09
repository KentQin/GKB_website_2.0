import React from 'react';
import thumbPic from '../img/thumb.png';
import userPic from '../img/user.png';


class SearchResultItem extends React.Component {

    render() {
        return (
            <div className = "result_box">
                <div className = "user_box" >
	                <span> Rank {this.props.num} </span>
                    <img src = {userPic}
                         className = "user" />
                    <span> {this.props.userName} </span>
                </div>
                <div className = "like_box" >
	                <div>
                        <img src = {thumbPic}
                             onClick = {this.onThumbClicker}
                             className = "thumb"/>
                    </div >
                    <div>
                        <span> {this.props.like}</span>
                    </div>
	            </div>
                <p>
	                <span><strong> Discription: </strong></span > {this.props.discription}
                </p>
            </div >
        );
    }

}


export default SearchResultItem;
