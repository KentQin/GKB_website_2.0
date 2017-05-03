import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SearchBar extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          searchStr: '',
          errors: {},
          inputs:[0,1]
      }

      this.onChange = this.onChange.bind(this);
      this.buttonClick = this.buttonClick.bind(this);
      this.onTouch = this.onTouch.bind(this);
      this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
      console.log("in on Toouch");
      e.preventDefault();
      this.setState({searchStr: e.target.value})
      this.buttonTestClick = this.buttonTestClick.bind(this);
  }

  onChange(e) {
      this.setState({searchStr: e.target.value})
  }

  onTouch(e) {
    console.log("in on Toouch");
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

  buttonTestClick(e){
      console.log("testgo");
      this.props.searchBarTestGoAction(this.state.searchStr);
      this.props.showSearchResult();
  }

    render(){
        const { errors } = this.state;
        //<input type="text" className="form-control" ref={'name'+item} value={"Place"+item} onChange={SearchBar.onTouch}/>
        return(
            <div>
                <div className="col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." value={this.state.searchStr} onChange={this.onChange}/>

                          <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.buttonClick}>Go!</button>
                              <button className="btn btn-default" type="button" onClick={this.buttonTestClick}>Test Go!</button>
                          </span>
                    </div>

                    {errors.searchBar && <span className="help-block">{errors.searchBar}</span> }

                </div>
            </div>
        );
    }
}


SearchBar.propTypes = {
    searchBarRequest: React.PropTypes.func.isRequired,
    searchBarTestGoAction: React.PropTypes.func,
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
