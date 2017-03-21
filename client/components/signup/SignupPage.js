import React from 'react';
import SignupFrom from './SignupForm';
import WelToLogin from './WelToLogin';
import OuterAuth from '../common/OuterAuth';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupAction';

class SignupPage extends React.Component {
    render() {

        // 1. import action creator, { userSignupRequest }, from outside, and it will be added to this.props by connect
        // in other words, { userSignupRequest } comes from connect

        // 2. Here, take { userSignupRequest } from props, and it will be passed to <SignupFrom />
        const { userSignupRequest } = this.props;
        console.log("Singup Page say: ", this.props );
        console.log("Singup Page send: ",{ userSignupRequest }," to Signup From");

        return (
            <div className="container loginPage">
                <div className="row centered">
                    <div className="col-md-3 login-page-block welcome-block">
                        <WelToLogin />
                    </div>

                    <div className="col-md-5 login-page-block">
                        <SignupFrom userSignupRequest={userSignupRequest}/>

                    </div>
                    <div className="col-md-4 login-page-block">
                        <OuterAuth />
                    </div>
                </div>
            </div>
        )
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

/*
 *  connect(mapStatetoProps, mapDispatchToProps)
 *  mapStatetoProps: provide data from redux store; takes state and return subject
 *  让你在数据变化时从 store 获取数据，并作为 props 传到组件中
 *  store --> props
 *
 *  mapDispatchToProps: specify action creators wrapped in dispatch
 *  让你可以使用 store 的 dispatch 方法，通常都是创建 action 创建函数并预先绑定，那么在调用时就能直接分发 action。
 *  action --> store.dispatch
 *
 *  here {userSignupRequest} is an action creator function, it is also an object
 *
 *  const container_component = connect()(UI_component)
 *
 *  mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。
 *  前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
 *  后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
 */


export default connect( (state)=>{ return{}}, { userSignupRequest }) (SignupPage);