import React from 'react';
<<<<<<< HEAD
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
=======
import {Link} from 'react-router';

class AddDescription extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            content: ''
        }
        this.onClickClose = this.onClickClose.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClickClose(){
        this.props.hideAddWindow();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return(
            <div className="small-window col-md-offset-3 col-md-6 add_description">
                <div className="form-group-n">
                    <div className="form-title">
                        <h4>Add Description</h4>
                        <div className="btn-close-float">
                            <Link onClick={this.onClickClose}> x </Link>
                        </div>
>>>>>>> 28fb923784ffd6f43cf65ff8afee322d0fc433d7
                    </div>

                    <div className="form-content">
                        <div className="form-content-description">
                           <p>
                               Contribute your own short description to help others navigate to this location.
                           </p>
                        </div>
                        <div>
<<<<<<< HEAD
                            <input className="form-control input-w-60 margin-small" placeholder="Text Description"/>
                            <p className="text-align-right">0/140</p>
=======
                            <input className="form-control input-w-60 margin-small"
                                   placeholder="Text Description"
                                   value={this.state.content}
                                   onChange={this.onChange}
                                   name="content"
                                   type="text"
                                   maxLength="140"/>
                            <p className="text-align-right">{this.state.content.length}/140</p>
>>>>>>> 28fb923784ffd6f43cf65ff8afee322d0fc433d7
                        </div>

                        <button type="submit" className="btn btn-default btn-login margin-small">Submit</button>
                        <div>
<<<<<<< HEAD
                            <Link className="margin-small">Cancel</Link>
=======
                            <Link className="margin-small" onClick={this.onClickClose}>Cancel</Link>
>>>>>>> 28fb923784ffd6f43cf65ff8afee322d0fc433d7
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

<<<<<<< HEAD
=======
AddDescription.propTypes = {
    hideAddWindow: React.PropTypes.func.isRequired
}

>>>>>>> 28fb923784ffd6f43cf65ff8afee322d0fc433d7
export default AddDescription;