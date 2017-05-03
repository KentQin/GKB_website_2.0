import React from 'react';
import LinkToHome from './../common/LinkToHome';
import {Link} from 'react-router';

class AddDescription extends React.Component{
    render(){
        return(
            <div className="small-window col-md-offset-3 col-md-6">
                <div className="form-group-n">
                    <div className="form-title">
                        <h4>Add Description</h4>
                        <LinkToHome/>
                    </div>

                    <div className="form-content">
                        <div className="form-content-description">
                           <p>
                               Contribute your own short description to help others navigate to this location.
                           </p>
                        </div>
                        <div>
                            <input className="form-control input-w-60 margin-small" placeholder="Text Description"/>
                            <p className="text-align-right">0/140</p>
                        </div>

                        <button type="submit" className="btn btn-default btn-login margin-small">Submit</button>
                        <div>
                            <Link className="margin-small">Cancel</Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddDescription;