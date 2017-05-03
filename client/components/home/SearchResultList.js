import React from 'react';
import SearchResultItem from './SearchResultItem'
import SearchResultHead from './SearchResultHead'
import addPic from '../img/add-post-button-dark.png';

class SearchResultList extends React.Component {

    // constructor(props){
    //     super(props);
    //     console.log(this.props.searchResult.searchResultList); // prints out whatever is inside props
        //super(props);
        //console.log('will creat')
        // const { resultArray } = this.props.searchResult.searchResultList;
        // const { location } = this.props.searchResult.searchResultList;
        // console.log('resultArray:',resultArray);
        // console.log('location:',location);
        // this.state = {
        //     results: {},
        //     location: {}
        // }
    // }

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
        const { resultArray } = this.props.searchResult.searchResultList;
        const { autoComment } = this.props.searchResult.searchResultList;
        const { location } = this.props.searchResult.searchResultList;
        if (typeof(resultArray) != 'undefined') {
            var numList = resultArray.length;
            console.log('num:', numList)
            for (var i = 0; i < numList; i++) {
                //console.log(resultArray.length);
                items.push(<tr key={i}><td><SearchResultItem userName={resultArray[i].userName}
                                                             rank={resultArray[i].rank}
                                                             num = {i+1}
                                                             discription={resultArray[i].discription}/>
                            </td></tr>
                );
            }
        }

        return (
            <div>
                <table className = 'result_table' >
                    <tbody>
                        <tr>
                            <td>
                                <SearchResultHead autoComment = {autoComment} location = {location}/>
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
            </div>
        )
    }

}

SearchResultList.propTypes = {
    searchResult: React.PropTypes.object.isRequired
}


export default SearchResultList;
