import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SearchBar extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          searchStr: '',
          errors: {}
      }

      this.onChange = this.onChange.bind(this);
      this.buttonClick = this.buttonClick.bind(this);
  }

  onChange(e) {
      this.setState({searchStr: e.target.value})
  }

  buttonClick(e) {
      e.preventDefault();
      const {user} = this.props.login
      console.log("search bar state: ", this.state);
          this.setState({errors: {} });
          var toSend = {
            searchStr: this.state.searchStr,
            id: user.id
          }
          this.props.searchBarRequest(toSend).then(
              // after server response then...
              // if successful
              (res) => {
                  console.log("we are back in searchBar clientside");
                  //this.context.router.push('/home')
              },
              // if server response any error message, set it into state errors
              (err) => {
                  console.log("Login Form: login failed");
                  //console.log(err.response.data);
                  this.setState({ errors: err.response.data});
                  console.log("this.state.errors: ", this.state.errors);
              });
    }

    render(){
        const { errors } = this.state;
        return(
            <div>
                <div className="col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." value={this.state.searchStr} onChange={this.onChange}/>
                        {errors.searchBar && <span className="help-block">{errors.searchBar}</span> }
                          <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.buttonClick}>Go!</button>
                          </span>
                    </div>
                </div>
            </div>
        );
    }
}


SearchBar.propTypes = {
    searchBarRequest: React.PropTypes.func.isRequired,
    login: React.PropTypes.object.isRequired
}

SearchBar.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ',state.login);
    return {
        login: state.login
    };
}

export default connect(mapStateToProps, {})(SearchBar);
