import React from 'react';
import LinkToHome from '../common/LinkToHome';
import {Link} from 'react-router';
import SearchHistoryList from './SearchHistoryList';
class SearchHistory extends React.Component{
    render(){
        return(
            <div className="vertical-block col-md-offset-1 col-md-8 window-drop-shadow">
                <div className="vertical-block-title">
                    <h3>Search History</h3>
                    <LinkToHome/>
                </div>


                <div className="vertical-block-content">
                    <div className="history-button">
                        <Link to="/signup"  className="history-button"/>Delete
                    </div>

                    <div  className="history-button">
                        <Link to ="/home" />Add to Favourites
                    </div>

                        {/*<div className="checkbox">*/}
                            {/*<label>*/}
                                {/*<input type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />*/}
                            {/*</label>*/}
                        {/*</div>*/}



                    <div>
                        <SearchHistoryList/>
                    </div>
                </div>

            </div>
        );
    }
}

export default SearchHistory;