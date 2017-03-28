import React from 'react';
import Dropzone from 'react-dropzone';
import emailIcon from './img/email-icon.png';
import classnames from 'classnames'
import { connect } from 'react-redux';

class DropzoneDemo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        imageFile: '',
        preview: '',
        errors: {}
      }

      this.onDrop = this.onDrop.bind(this);
    }

    onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles[0]);
      console.log('Rejected files: ', rejectedFiles);
      const {user} = this.props.login;
      console.log("user in onDrop: " + user.email +  " " + user.id);

      console.log("file preview: " + acceptedFiles[0].preview);
      if (acceptedFiles[0]) {


        // var newPath = __dirname + "/images/" + acceptedFiles[0].name;
        // // write file to uploads/fullsize folder
        // require('fs').writeFile(newPath, data, function (err) {
        //   // let's see it
        //   //res.redirect("/uploads/fullsize/" + imageName);
        // });


        this.setState({
          preview: acceptedFiles[0].preview,
          imageFile: acceptedFiles[0].name
        }, function() {
          console.log("imageFile in setState callback: ", this.state);
          var toSend = {
            imageFile: this.state.imageFile,
            id: user.id
          }
          this.props.userProfilePicUploadRequest(toSend).then(
              // after server response then...
              // if successful
              (res) => {
                  //this.context.router.push('/welcome')

              },
              // if server response any error message, set it into state errors
              (err) => {
                  //this.setState({ errors: err.response.data})
              });
        });

        //console.log("imageFile: ", this.state);


      } else if (rejectedFiles[0]) {
        console.log("in rejected");
        this.setState({
          errors: {invalid: 'Invalid File. Cannot upload Image.'}
        });
      }
    }

    render() {
      const { errors } = this.state;
      const {user} = this.props.login;
      // Choosing which profile photo to display
      var imageSrc;

      if (this.state.preview) {
        imageSrc = this.state.preview;
      } else {
        if (user.imageFile != null) {
          imageSrc = user.imageFile;
        } else {
          imageSrc = emailIcon;
        }
      }
      return (
          <div className="">
            <Dropzone className="drop-zone" onDrop={this.onDrop}
              maxSize={2048000}
              accept="image/*" >
              <img className="img-circle" src={imageSrc} />
            </Dropzone>
            {errors.invalid && <span className={classnames("help-block", { 'has-error': errors.invalid})} >{errors.invalid}</span> }
          </div>
      );
    }
}

DropzoneDemo.propTypes = {
    login: React.PropTypes.object.isRequired
    // userProfilePicUploadRequest: React.PropTypes.func.isRequired
}

DropzoneDemo.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ',state.login);
    return {
        login: state.login
    };
}

//export default DropzoneDemo;
export default connect(mapStateToProps, {})(DropzoneDemo);
