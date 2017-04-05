import React from 'react';
import Dropzone from './../DropZone'
class OverviewContent extends React.Component{
    render(){
        return(
            <div className="middle-block">
                <h4 className="setting-content-title">Overview/Profile</h4>
                <div className="setting-content-photo">
                    <Dropzone className="setting-content-photo-area"/>
                </div>
               <table className="table">
                    <tr>
                        <th>Display Name</th>
                        <td>Username</td>
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

export default OverviewContent