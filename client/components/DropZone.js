import React from 'react';
import Dropzone from 'react-dropzone';
import emailIcon from './img/email-icon.png';

class DropzoneDemo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        imageFile: ''
      }

      this.onDrop = this.onDrop.bind(this);
    }

    onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
      console.log("file preview: " + acceptedFiles[0].preview);
      this.setState({
        imageFile: acceptedFiles[0].preview
      });
    }

    render() {
      return (
          <div className="">
            <Dropzone className="drop-zone" onDrop={this.onDrop}
              maxSize={1024000}
              accept="image/*" >
              <img className="img-circle" src={this.state.imageFile || emailIcon} />
            </Dropzone>
            {}
          </div>
      );
    }
}

export default DropzoneDemo;
