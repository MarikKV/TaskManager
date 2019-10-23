import React, {Component} from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./Header.module.css";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            formError: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.formError) {
            console.log('error');
        } else {
            const userDetails = {
                email: this.state.email,
                password: this.state.password,
            }
            fetch("http://localhost:4000/api/signup", {
                method: "POST",
                mode: 'no-cors',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
    }

    confirmPass(e) {
        if(e.target.value === this.state.password) {
            this.state.formError = false;
            console.log('ok')
        }
        else {
            this.state.formError = true;
            console.log('not ok')
        }
    }
    render() {
        return (
            <div className={s.form_sign_in}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group controlId="confirmFormBasicPassword">
                        <Form.Label>Confirm your password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.confirmPass.bind(this)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default Register;