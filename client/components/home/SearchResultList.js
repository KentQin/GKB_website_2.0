import React from 'react';
import SearchResultItem from './SearchResultItem'
import SearchResultHead from './SearchResultHead'
import addPic from '../img/add-post-button-dark.png';
import AddDescription from './AddDescription';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import lodash from 'lodash';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


class SearchResultList extends React.Component {

    constructor(props){
        super(props);

        // const { resultArray } = this.props.searchResult.searchResultList;
        // const { location } = this.props.searchResult.searchResultList;
        // console.log('resultArray:',resultArray);
        // console.log('location:',location);
        this.state = {
            showAddDescription: false
        }
        this.onClickAdd = this.onClickAdd.bind(this);
        this.showAddWindow = this.showAddWindow.bind(this);
        this.hideAddWindow = this.hideAddWindow.bind(this);
        //this.showLoginWindow = this.showLoginWindow.bind(this);
        //this.hideLoginWindow = this.hideLoginWindow.bind(this);
        this.clickLike = this.clickLike.bind(this);
    }

    onClickAdd(){
        const isAuthenticated = this.props.isAuthenticated;
        if (isAuthenticated){
            this.showAddWindow();
        }
    }

    showAddWindow(){
        this.setState({
            showAddDescription: true
        });
    }

    hideAddWindow(){
        this.setState({
            showAddDescription: false
        });
    }
    //
    // showLoginWindow(){
    //     this.setState({
    //         showLoginWindow: true
    //     });
    // }
    //
    // hideLoginWindow(){
    //     this.setState({
    //         showLoginWindow: false
    //     });
    // }

    clickLike(addLikeRequest){
        // add one count on target description
        // send user_id
        //this.props.addLikeRequest(addLikeRequest);
    }

    render() {

        var items = [];
        //var i = 0;
        // const { resultArray } = this.props.searchResult.searchResultList;
        // const { autoComment } = this.props.searchResult.searchResultList;
        const { placeFullAddr } = this.props.searchResult.searchResultPageConfig;
        const { placePhoto } =this.props.searchResult.searchResultPageConfig;
        const { array }= this.props.descriptionArray;
        const isAuthenticated = this.props.isAuthenticated;

        var addImg;
        if(isAuthenticated){
            addImg = <img id = "add" src = {addPic}
                              onClick = {this.onClickAdd}
            />;
        }else {
            addImg = <Link to="/login" ><img id = "add" src = {addPic}/>
                    </Link>;
        }


        // console.log(descriptionArray);
        if(!lodash.isEmpty(array)){
            const numList = array.length;
            for (var i = 0; i < numList; i++) {
                //console.log(resultArray.length);
                const user_id = this.props.user_id;
                const {user_like_array} = array[i].doc;
                var thumbUp = false;
                if(user_like_array != undefined){
                    if(user_like_array.indexOf(user_id) != -1){
                        console.log("exist");
                        thumbUp = true;
                    }
                }

                items.push(<tr key={i}><td><SearchResultItem userName={array[i].doc.user_name}
                                                             like= {array[i].doc.like}
                                                             num = {i+1}
                                                             //clickLike = {this.clickLike}
                                                             des_id = {array[i].doc._id}
                                                             proImg = {array[i].proImg}
                                                             isAuthenticated = {isAuthenticated}
                                                             user_id = {user_id}
                                                             preThumbUp = {thumbUp}
                                                             discription={array[i].doc.description_content}/>
                    </td></tr>
                );
            }
        }else{
            items.push(<tr key={1}><td><div className = "result_box">
                                    <h3>There is no description, waiting for your contribution</h3>
                                </div>
                </td></tr>

            );
        }

        const {autoDescription} = this.props.login
        var autoDesc;
        if (autoDescription) {
          autoDesc = autoDescription;
        } else {
          autoDesc = "No computer generated description available"
        }

        // }

        return (
            <div>
                <table className = 'result_table' >
                    <tbody>
                        <tr>
                            <td>
                                <SearchResultHead autoComment = {autoDesc}
                                                  location = {placeFullAddr}
                                                  photo = {placePhoto}
                                                  addToFavoritesAction = {this.props.addToFavoritesAction}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="left-text">
                                    <span> Location Descriptions </span>
                                    <div id = "add_dis_box" >
                                        {addImg}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div className='scrollit'>
                         {items}
                        </div>
                    </tbody>
                    </table>

                {this.state.showAddDescription && <AddDescription hideAddWindow={this.hideAddWindow}
                                                                  setDescriptionArray = {this.props.setDescriptionArray}
                                                                  updateShowSearchResult={this.props.updateShowSearchResult}
                                                                  />}
            </div>
        )
    }

}

SearchResultList.propTypes = {
    //isAuthenticated: React.PropTypes.boolean.isRequired,
    searchResult: React.PropTypes.object.isRequired,
    descriptionArray: React.PropTypes.object.isRequired,
    setDescriptionArray: React.PropTypes.func.isRequired,
    updateShowSearchResult: React.PropTypes.func.isRequired,
    addToFavoritesAction: React.PropTypes.func.isRequired
}


//export default SearchResultList;
export default connect(null, {}) (SearchResultList);
