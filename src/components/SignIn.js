import React, {Component} from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

import s from '../componentsStyle/Header.module.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    onEmailChange(e) {
        this.props.setEmailText(e.target.value)
    }
    onPasswordChange(e) {
        this.props.setPasswordText(e.target.value)
    }
    onSubmit(e) {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem('users'));
        let user;
        console.log('signining');
        for(user in users){     
            let userName;
            if(users[user].email == this.props.email && users[user].password == this.props.password){
                userName = users[user].name;
                localStorage.setItem('CurrentUser', userName);
                window.location.href = '/home';
            } else{
                console.log('wrong email or password')
            }
        }
    }
    render() {        
        return (
            <div className={s.form_sign_in}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            name="email" 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={this.onEmailChange}
                            value={this.props.email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.onPasswordChange}
                            value={this.props.password} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                </Form>
                
            </div>
        );
    }
}

export default SignIn;