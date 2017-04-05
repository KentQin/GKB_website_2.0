import React from 'react';
import Dropzone from 'react-dropzone';
import defaultPhoto from './img/default-profile-picture.jpg';
import classnames from 'classnames'
import { connect } from 'react-redux';
import request from 'superagent'
//import fs from 'fs'
//var imageSrc_top = require("F:/Uni Melb/4th sem/Research Project/GKB/GKB_final/images/"+props.login.user.imageFile.filename)
//import pic from './img/7c09444f582152f9983273c8c51b158a.png'

class DropzoneDemo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        imageFile: {},
        preview: '',
        errors: {}
      }

      this.onDrop = this.onDrop.bind(this);
    }

    onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
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
          imageFile: acceptedFiles[0]
        }, function() {
          console.log("imageFile in setState callback: ", this.state);
          var toSend = {
            imageFile: this.state.imageFile,
            id: user.id
          }
          var temp = acceptedFiles[0];
          // this.props.userProfilePicUploadRequest(toSend).then(
          //     // after server response then...
          //     // if successful
          //     (res) => {
          //         //this.context.router.push('/welcome')
          //
          //     },
          //     // if server response any error message, set it into state errors
          //     (err) => {
          //         //this.setState({ errors: err.response.data})
          //     });

            var photo = new FormData();
            photo.append('photo', acceptedFiles[0]);
            var post = "/api/users/addProfilePic/" + user.id
            request.post(post)
            .send(photo)
            .end(function(err, resp) {
              if (err) { console.error(err); }
              else {
                console.log("resp: ", resp);
                console.log("successfully here in dropzone");
              }
              //return resp;
            });

        });

        //console.log("imageFile: ", this.state);


      } else if (rejectedFiles[0]) {
        console.log("in rejected");
        this.setState({
          errors: {invalid: 'Cannot upload Image. Invalid File or size more than 2MB'}
        });
      }
    }

    render() {
      const { errors } = this.state;
      const {user} = this.props.login;
      // Choosing which profile photo to display
      //var pic = user.imageFile.filename
      var imageSrc;
      //var imageSrc_top = require("F:/Uni Melb/4th sem/Research Project/GKB/GKB_final/images/"+user.imageFile.filename)

      if (this.state.preview) {
        imageSrc = this.state.preview;
      } else {
        if (user.imageFile != null) {
          console.log("This user has an image");
          var pic;
          console.log("type of imageFile: ", typeof(user.imageFile));
          if (typeof(user.imageFile) != 'string') {
            console.log("not equal string dropzone")
            pic = user.imageFile.filename
            imageSrc = require("F:/Uni Melb/4th sem/Research Project/GKB/GKB_final/images/"+pic)
          } else {
            imageSrc = user.imageFile
            console.log("equal to string");
          }
          //console.log("imageFile " + user.imageFile);
          //console.log("pic: ", pic)
          //imageSrc = user.imageFile.originalname;
          //var pic = "./img/" + user.imageFile.filename
          // import image from pic
          // imageSrc = pic;
          //console.log("latest pic: " + pic);
          // imageSrc = require("./img/" + user.imageFile.filename);
          //imageSrc = require("./img/1cedaadc4eb16a5d83406e9761ebadb9.png");

          //imageSrc = require()
          //imageSrc = "file://localhost/F:/Uni Melb/4th sem/Research Project/GKB/GKB_final/images/"+pic
          //imageSrc = imageSrc_top
        } else {
          imageSrc = defaultPhoto;
        }
      }
      return (
          <div className="">
            <Dropzone className="drop-zone" onDrop={this.onDrop}
              maxSize={2048000}
              accept="image/*"
              name="file" >
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
