import React from 'react';

class SetDefaultPhoto extends React.Component{
    onSubmit(){

    }

    render(){
        return(
            <div>
                <button onSubmit={this.onSubmit()}>Remove</button>
            </div>
        );
    }
}

export default SetDefaultPhoto;