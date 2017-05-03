import React from 'react';
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
                    </div>

                    <div className="form-content">
                        <div className="form-content-description">
                           <p>
                               Contribute your own short description to help others navigate to this location.
                           </p>
                        </div>
                        <div>
                            <input className="form-control input-w-60 margin-small"
                                   placeholder="Text Description"
                                   value={this.state.content}
                                   onChange={this.onChange}
                                   name="content"
                                   type="text"
                                   maxLength="140"/>
                            <p className="text-align-right">{this.state.content.length}/140</p>
                        </div>

                        <button type="submit" className="btn btn-default btn-login margin-small">Submit</button>
                        <div>
                            <Link className="margin-small" onClick={this.onClickClose}>Cancel</Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

AddDescription.propTypes = {
    hideAddWindow: React.PropTypes.func.isRequired
}

export default AddDescription;