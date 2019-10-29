import React, {Component} from "react";
import {connect} from 'react-redux';
import {setEmailText, setPasswordText, setRepeatPasswordText, setDisabledText, setNicknameText} from '../store/signup/actions';
import SignUp from './SignUp';

class SignUpContainer extends Component {
    render() { 
        return <SignUp 
            email={this.props.email} 
            password={this.props.password} 
            repeatPassword={this.props.repeatPassword}
            nickname={this.props.nickname} 
            disabled = {this.props.disabled}
            
            setDisabledText = {this.props.setDisabledText}
            setEmailText={this.props.setEmailText} 
            setPasswordText={this.props.setPasswordText}
            setRepeatPasswordText={this.props.setRepeatPasswordText}
            setNicknameText={this.props.setNicknameText} />;
    }
}

const mapStateToProps = state => {
    return {
        email: state.signup.email,
        password: state.signup.password,
        repeatPassword: state.signup.repeatPassword,
        nickname: state.signup.nickname,
        disabled: state.signup.disabled
    };
}

const mapDispatchToProps =  {
    setEmailText,
    setPasswordText,
    setRepeatPasswordText,
    setNicknameText,
    setDisabledText
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);