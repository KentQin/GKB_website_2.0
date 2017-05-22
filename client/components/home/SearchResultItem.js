import React from 'react';
import thumbSrc from '../img/thumb.png';
import thumbUpSrc from '../img/thumbUp.png'
import classNames from 'classnames';
import defaultPhoto from '../img/default-profile-picture.jpg';
import axios from 'axios';
import lodash from 'lodash';


class SearchResultItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            clicked: this.props.preThumbUp,
            like: this.props.like
        }
        this.onThumbClicker = this.onThumbClicker.bind(this);
    }

    onThumbClicker(){

        const isAuthenticated = this.props.isAuthenticated;

        if (isAuthenticated){
            // if already clicked
            if(this.state.clicked){
                alert("you already liked this one")
            }
            // if this is the first click
            else{
                // send add like request
                const addLikeRequest = {
                    des_id :this.props.des_id,
                    user_id :this.props.user_id
                };

                //this.props.updateLike(addLikeRequest);

                axios.post('/api/searchBar/addLike', addLikeRequest).then(res =>{
                    //const description = res.data;
                    console.log("*************");
                    console.log(res.data);
                    const {ans} = res.data;
                    if (ans)  {
                        this.setState({
                        clicked: !this.state.clicked,
                        like: this.state.like + 1
                        });
                    }else{
                        alert("alread liked this one");
                    }
                    // return res.data;
                    // dispatch(setSearchResultList(descriptionArray));
                });

            }
        }else{
            alert("please login");
        }

    }

    render() {

        const preThumbUpL = (this.state.clicked  || this.props.preThumbUp);

        var userProfile;
        var thumbPic;

        if(preThumbUpL){
            thumbPic = thumbUpSrc
        }else{
            thumbPic = thumbSrc
        }

        if(!lodash.isEmpty(this.props.proImg)){
            const proImg = this.props.proImg;
            const base64 = (Buffer.from(proImg.data).toString('base64'));
            userProfile = 'data:'+proImg.contentType+';base64,'+base64;
        }else{
            // console.log("********************");
            // console.log(this.props.proImg);
            userProfile = defaultPhoto;
        }

        return (
            <div className = "result_box">
                <div className = "like_box" >
                    <div>
                        <img src = {thumbPic}
                             onClick = {this.onThumbClicker}
                             className = "thumb"/>
                    </div >
                    <div>
                        <span className="like_num"> {this.state.like}</span>
                    </div>
                </div>
                <div className = "user_box" >

                    <img src = {userProfile}
                         className = "user" />
                    <span> {this.props.userName} </span>
                </div>
                <div className="description">
                    <p>
                        {this.props.discription}
                    </p>
                </div>
            </div >
        );
    }

}

SearchResultItem.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired
}

export default SearchResultItem;
