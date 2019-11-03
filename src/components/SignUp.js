import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "../componentsStyle/Header.module.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passCheck: null
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onNicknameChange = this.onNicknameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    }
    onNicknameChange(e) {
        this.props.setNicknameText(e.target.value)
    }
    onEmailChange(e) {
        this.props.setEmailText(e.target.value)
    }
    onPasswordChange(e) {
        this.props.setPasswordText(e.target.value)
        if(e.target.value === this.props.repeatPassword) {
            this.props.setDisabledText('');
        }
        else {
            this.props.setDisabledText('disabled');
        }
    }
    onRepeatPasswordChange(e) {
        this.props.setRepeatPasswordText(e.target.value);
        if(e.target.value === this.props.password) {
            this.props.setDisabledText('');
            this.setState({
                passCheck: true
            })
        }
        else {
            this.setState({
                passCheck: false
            })
            console.log('not ok');
            this.props.setDisabledText('disabled');
        }
    }
    onSubmit(e) {
        e.preventDefault(); 
        console.log('saved');
        let newUser = {name: this.props.nickname, email: this.props.email, password: this.props.password, tasks: []};
        let firstUser = [newUser];
        console.log(localStorage.getItem('users'));
        if(!localStorage.getItem('users')) {
            console.log('empty');
            localStorage.setItem('users', JSON.stringify(firstUser));
        } else{
            console.log('adding user');
            let users = JSON.parse(localStorage.getItem('users'));
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
        }
        window.location.href = '/SignIn';
    }
    render() {
        let passCheck;
        if(this.state.passCheck == false){
            passCheck = <Alert variant='danger'>password do not match</Alert> 
        }
        if(this.state.login == true){
            passCheck = <div></div>
        }
        return (
            <div className={s.form_sign_in}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="nickname" 
                            placeholder="Enter nickname" 
                            value={this.props.nickname}
                            onChange={this.onNicknameChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" 
                            placeholder="Enter email" 
                            value={this.props.email}
                            onChange={this.onEmailChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={this.props.password}
                            onChange={this.onPasswordChange} />
                    </Form.Group>

                    {passCheck}

                    <Form.Group controlId="confirmFormBasicPassword">
                        <Form.Label>Confirm your password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            placeholder="Repeat password" 
                            value={this.props.repeatPassword}
                            onChange={this.onRepeatPasswordChange}
                            />
                    </Form.Group>

                    <Button variant="primary" name="submitbutton" type="submit" disabled={this.props.disabled}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default SignUp;