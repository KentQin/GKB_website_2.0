import React from 'react';

class PasswordContent extends React.Component{
    render(){
        return(
            <div>
                <form className="form-horizontal">
                    <h1 className="h-e-a-d-e-r-t-e-x-t">Update Password</h1>

                    <div className="form-group">
                        <input
                            name="email"
                            type="text"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="Old Password" />
                    </div>
                    <div className="form-group">
                        <input
                            name="email"
                            type="text"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="New Password" />
                    </div>
                    <div className="form-group">
                        <input
                            name="email"
                            type="text"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-default btn-login">Save</button>
                </form>
            </div>
        );
    }
}

export default PasswordContent;