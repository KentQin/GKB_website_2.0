import React from 'react';
import { connect } from 'react-redux';

/*
 * This component renders the user overview page
 * This is used by account setting
 */

class OverviewContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
         const { user } = this.props.login;

        return(
            <div className="middle-block">
                <h4 className="setting-content-title">Overview/Profile</h4>
                <div className="setting-content-photo">
                </div>
               <table className="table">
                    <tr>
                        <th>Display Name</th>
                        <td>{user.userName}</td>
                    </tr>
                   <tr>
                       <th>Date joined</th>
                       <td>Date</td>
                   </tr>
                   <tr>
                       <th>Contributions</th>
                       <td>0</td>
                   </tr>
               </table>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps,null)(OverviewContent);