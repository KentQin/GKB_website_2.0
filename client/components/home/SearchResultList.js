import React from 'react';
import SearchResultItem from './SearchResultItem'
import SearchResultHead from './SearchResultHead'
import addPic from '../img/add-post-button-dark.png';
import AddDescription from './AddDescription';

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
        this.clickLike = this.clickLike.bind(this);
    }

    onClickAdd(){
        const auth = this.props.isAuthenticated;
        if (auth){
            this.showAddWindow();
        }else{
            alert("Please log in");
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

    clickLike(id){
        //add one count on target description
        this.props.addLikeRequest(id)
    }



    // componentWillMount() {
    //
    //     const { resultArray } = this.props.searchResult.searchResultList;
    //     const { location } = this.props.searchResult.searchResultList;
    //     this.setState({
    //         results: resultArray,
    //         location: location
    //     });
    // }
    //
    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         results: nextProps.resultArray,
    //         location: nextProps.location
    //     });
    // }


    render() {

        var items = [];
        //var i = 0;
        // const { resultArray } = this.props.searchResult.searchResultList;
        // const { autoComment } = this.props.searchResult.searchResultList;
        const { placeFullAddr } = this.props.searchResult.searchResultPageConfig;
        const { array }= this.props.descriptionArray;

        // console.log(descriptionArray);
        var numList = array.length;
        for (var i = 0; i < numList; i++) {
            //console.log(resultArray.length);
            items.push(<tr key={i}><td><SearchResultItem userName={array[i].doc.user_name}
                                                         like= {array[i].doc.like}
                                                         num = {i+1}
                                                         clickLike = {this.clickLike}
                                                         id = {array[i].doc._id}
                                                         proImg = {array[i].proImg}
                                                         discription={array[i].doc.description_content}/>
                        </td></tr>
            );
        }
        // }

        return (
            <div>
                <table className = 'result_table' >
                    <tbody>
                        <tr>
                            <td>
                                <SearchResultHead autoComment = "autoComment" location = {placeFullAddr}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="left-text">
                                    <span> Location Descriptions </span>
                                    <div id = "add_dis_box" >
                                        <img id = "add"
                                             src = {addPic}
                                             onClick = {this.onClickAdd}
                                        />
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
                                                                  updateShowSearchResult={this.props.updateShowSearchResult}/>}
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
    addLikeRequest: React.PropTypes.func.isRequired
}


export default SearchResultList;
