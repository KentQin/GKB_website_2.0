import React from 'react';
import SearchResultItem from './SearchResultItem'
import SearchResultHead from './SearchResultHead'
import addPic from '../img/add.png';

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
        var i = 0;
        const { resultArray } = this.props.searchResult.searchResultList;
        //console.log(resultArray);
        for (var result in resultArray) {
            //console.log(result);
            items.push(<tr key={i}><td><SearchResultItem userName={resultArray[i].userName}
                                                 rank={resultArray[i].rank}
                                                 discription={resultArray[i].discription}/></td></tr>
            );
            i+=1;
        }


        return (
            <div>
                <table className = 'result_table' >
                    <tbody>
                        <tr><
                            td>
                                <SearchResultHead/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span> Location Descriptions </span>
                                    <div id = "add_dis_box" >
                                        <buttom id = "discription"
                                                onClick = {this.onClickDis}
                                        >Location Discriptions</buttom>
                                        <img id = "add"
                                             src = {addPic}
                                             onClick = {this.onClickAdd}
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                         {items}
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
