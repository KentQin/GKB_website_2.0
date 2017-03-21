import React from 'react';
import { Link } from 'react-router';
//import nodemailer from 'nodemailer';

class ResetPwd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username_email: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
      // create reusable transporter object using the default SMTP transport
      // let transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //       user: 'prajith.manian@gmail.com',
      //       pass: 'prajith271990'
      //   }
      // });
      //
      // // I am doing this for using email api setup email data with unicode symbols
      // let mailOptions = {
      //     from: 'Prajith <prajith.manian@gmail.com>', // sender address
      //     to: 'Ruoqiao Zhang <riolayre@gmail.com>', // list of receivers
      //     subject: 'Hello ✔', // Subject line
      //     text: 'Hello world ?', // plain text body
      //     html: '<b>Hello world ?</b>' // html body
      // };
      //
      // // send mail with defined transport object
      // transporter.sendMail(mailOptions, (error, info) => {
      //     if (error) {
      //         return console.log(error);
      //     }
      //     console.log('Message %s sent: %s', info.messageId, info.response);
      // });
    }

    render() {
        return (
            <form className="form-horizontal">
                <h1 className="h-e-a-d-e-r-t-e-x-t">RESET PASSWORD</h1>
                <div className="form-group">
                    <input
                        value={this.state.username_email}
                        onChange={this.onChange}
                        name="username_email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Email Address" />
                </div>
                <button type="submit" className="btn btn-default btn-login" onClick={this.onSubmit}>Submit</button>
                <div className="form-group">
                    <Link to="/login" >Return to Login</Link>
                </div>
            </form>
        );
    }
}

export default ResetPwd;
