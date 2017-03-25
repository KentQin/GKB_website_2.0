import React from 'react';
import Dropzone from 'react-dropzone';
import emailIcon from './img/email-icon.png';
import classnames from 'classnames'

class DropzoneDemo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        imageFile: '',
        errors: {}
      }

      this.onDrop = this.onDrop.bind(this);
    }

    onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
      //console.log("file preview: " + acceptedFiles[0].preview);
      if (acceptedFiles[0]) {
        this.setState({
          imageFile: acceptedFiles[0].preview
        });
      } else if (rejectedFiles[0]) {
        console.log("in rejected");
        this.setState({
          errors: {invalid: 'Invalid File. Cannot upload Image.'}
        });
      }
    }

    render() {
      const { errors } = this.state;
      return (
          <div className="">
            <Dropzone className="drop-zone" onDrop={this.onDrop}
              maxSize={1024000}
              accept="image/*" >
              <img className="img-circle" src={this.state.imageFile || emailIcon} />
            </Dropzone>
            {errors.invalid && <span className={classnames("help-block", { 'has-error': errors.invalid})} >{errors.invalid}</span> }
          </div>
      );
    }
}

export default DropzoneDemo;
