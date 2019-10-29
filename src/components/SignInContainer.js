import React, {Component} from "react";
import {connect} from 'react-redux';
import {setEmailText, setPasswordText} from '../store/signin/actions';
import SignIn from './SignIn';

class SignInContainer extends Component {
    render() { 
        return <SignIn 
            email={this.props.email} 
            password={this.props.password}
            setEmailText={this.props.setEmailText} 
            setPasswordText={this.props.setPasswordText} />;
    }
}

const mapStateToProps = state => {
    return {
        email: state.signin.email,
        password: state.signin.password
    };
}

const mapDispatchToProps =  {
    setEmailText,
    setPasswordText
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);