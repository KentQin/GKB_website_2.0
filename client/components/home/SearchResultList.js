import React from 'react';
import SearchResultItem from './SearchResultItem'
import SearchResultHead from './SearchResultHead'
import addPic from '../img/add-post-button-dark.png';
import AddDescription from './AddDescription';
import { Link } from 'react-router';
import lodash from 'lodash';


class SearchResultList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showAddDescription: false
        }
        this.onClickAdd = this.onClickAdd.bind(this);
        this.showAddWindow = this.showAddWindow.bind(this);
        this.hideAddWindow = this.hideAddWindow.bind(this);
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

    render() {

        var items = [];
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
            //console.log("descriptons array:", array);
            for (var i = 0; i < numList; i++) {
                //console.log(resultArray.length);
                const user_id = this.props.user_id;
                const {user_like_array} = array[i].doc;
                var thumbUp = false;
                if(user_like_array != undefined){
                    if(user_like_array.indexOf(user_id) != -1){
                        //console.log("exist");
                        thumbUp = true;
                    }
                }

                items.push(<tr key={i}><td><SearchResultItem userName={array[i].doc.user_name}
                                                             like= {array[i].doc.like}
                                                             num = {i+1}
                                                             des_id = {array[i].doc._id}
                                                             proImg = {array[i].proImg}
                                                             isAuthenticated = {isAuthenticated}
                                                             user_id = {user_id}
                                                             preThumbUp = {thumbUp}
                                                             discription={array[i].doc.description_content}
                                                            />
                    </td></tr>
                );
            }
        }else{
            items.push(<tr key={1}><td><div className = "empty_result_box">
                                    <div className="no-user-submitted-de">No user-submitted descriptions available…</div>
                                    <div className="contribute-your-own">Contribute your own description for this location</div>
                                    <div className="add_box">
                                        {addImg}
                                    </div>
                                </div>
                </td></tr>

            );
        }

        const {autoDescription} = this.props.login.user
        var autoDesc;
        if (autoDescription) {
          autoDesc = autoDescription;
        } else {
          autoDesc = "No computer generated description available"
        }

        // }

        return (
            <div className="table_container no-click-through">
                <table className = "result_table" >
                    <tbody>
                        <tr>
                            <td>
                                <SearchResultHead autoComment = {autoDesc}
                                                  location = {placeFullAddr}
                                                  photo = {placePhoto}
                                                  addToFavoritesAction = {this.props.addToFavoritesAction}
                                                  hideSearchResult={this.props.hideSearchResult}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="left-text">
                                    <span> Location Descriptions </span>
                                    <div className="add_dis_box" >
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
                                                                  updateContributionArray = {this.props.updateContributionArray}
                                                                  />}
            </div>
        )
    }

}

SearchResultList.propTypes = {
    searchResult: React.PropTypes.object.isRequired,
    descriptionArray: React.PropTypes.object.isRequired,
    setDescriptionArray: React.PropTypes.func.isRequired,
    updateShowSearchResult: React.PropTypes.func.isRequired,
    addToFavoritesAction: React.PropTypes.func.isRequired,
    updateContributionArray: React.PropTypes.func.isRequired
}


export default SearchResultList;
