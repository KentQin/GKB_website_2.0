import React from 'react';
import Dropzone from 'react-dropzone';
import defaultPhoto from './img/default-profile-picture.jpg';
import lodash from 'lodash';


class DropzoneDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageFile: {},
            preview: '',
            errors: {},
            imgScr:''
        }

        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(acceptedFile) {

        const img = acceptedFile[0]

        let header = {
            'content-type': 'multipart/form-data'
        }

        const data = new FormData();

        const {email} = this.props.user;
        const {accountType} = this.props.user;
        const {proImg} = this.props.user;
        console.log('proImg:',proImg);
        data.append('my_file', img);
        data.append('email',email);
        data.append('accountType',accountType);
        this.props.addProImgAction(data);

    }



    render() {
        const {proImg} = this.props.user;
        if(lodash.isEmpty(proImg)){
            var userProfile = defaultPhoto;
        }else{
            const base64 = (Buffer.from(proImg.data).toString('base64'));
            var userProfile = 'data:'+proImg.contentType+';base64,'+base64;
        }
        return (
            <div className="">
                <Dropzone className="drop-zone"
                          onDrop={this.onDrop}
                          maxSize={2048000}
                          accept="image/*"
                          name="userProfile"
                          multiple={false}>
                    <img className="img-circle" src={userProfile} />
                </Dropzone>
            </div>
        );
    }
}

DropzoneDemo.propTypes = {
    user: React.PropTypes.object.isRequired,
    addProImgAction: React.PropTypes.func.isRequired
}

DropzoneDemo.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default DropzoneDemo;
