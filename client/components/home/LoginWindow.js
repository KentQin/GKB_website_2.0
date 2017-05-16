import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';


class AddDescription extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onClickClose = this.onClickClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClickClose(){
        this.props.hideLoginWindow();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit() {
        e.preventDefault();
        alert("sumit");
        //alert("sumbit");
        // console.log("Submit!!!!!!!!!!!")
        // const content = this.state.content;
        // const { id } = this.props.contributor;
        // const { placeFullAddr} = this.props.placeInfo;
        // const { userName } =  this.props.contributor;
        // const description = {
        //     user_id : id,
        //     user_name : userName,
        //     placeFullAddr: placeFullAddr,
        //     description_content: content
        // }
        // console.log(this.props);
        //this.props.login(description).then(this.props.hideAddWindow());
        // axios.post('/api/searchBar/addDescription', description).then(res =>{
        //     console.log('ans from server')
        //     this.props.hideAddWindow();
        // toSend = {
        //     searchStr: suggest.terms[0].value,
        //     id: user.id,
        //     fulladdr: suggest.description
        // }
        // this.props.searchBarRequest(toSend).then(
        // );
        // })
    }

    render(){

        var close = <Link onClick={this.onClickClose}> x </Link>;

        return(
            <div className="col-md-4 add_description">
                <form className="form-horizontal">
                    <h1 className="h-e-a-d-e-r-t-e-x-t">LOGIN</h1>
                    <div className="form-group">
                        <input
                            value={this.state.email}
                            onChange={this.onChange}
                            name="email"
                            type="text"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="Email" />

                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.password}
                            onChange={this.onChange}
                            name="password"
                            type="password"
                            className="form-control input-w-60"
                            id="exampleInputPassword1"
                            placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <Link to="/resetpassword" >Forget Password?</Link>
                    </div>
                    <button className="btn btn-default btn-login"
                            onSubmit={this.onSubmit}>Login2</button>
                    {close}
                </form>
            </div>
        );
    }
}


AddDescription.propTypes = {
    hideLoginWindow: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        contributor: state.login.user,
        placeInfo: state.searchResult.searchResultPageConfig
    };
}

export default connect(mapStateToProps, null) (AddDescription);