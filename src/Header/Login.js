import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import s from './Header.module.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();

        const userDetails = {
            email: this.state.email,
            password: this.state.password,
        }

        fetch("http://localhost:4000/login", {
            method: "GET",
            mode: 'no-cors',
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify(userDetails),
        }).then(res =>console.log(res))
            .then(res => res.json())
            .then(data => console.log(data));
    }
    render() {
        return (
            <div className={s.form_sign_in}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.onChange} value={this.state.email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onChange} value={this.state.password} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Header;