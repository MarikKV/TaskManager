import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import s from "../componentsStyle/Task.module.css";


class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:'',
            username: '',
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        this.state.users = localStorage.getItem('users');
        this.state.username = localStorage.getItem('CurrentUser');
        console.log(this.state)
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                        {items.tasks.map(item => (
                            <div className={s.task_block}  key={item.name}>
                                <Card className="text-center">
                                    <Card.Header>Featured</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.name}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.alertClicked(item.name)}>Edit</Button>
                                        <Button variant="danger" onClick={() => this.alertClicked2(item.name)}>Delete</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                </Card>
                            </div>
                        ))}
                        {console.log(items)}
                </div>
            );
        }
    }
    alertClicked(x) {
        console.log(x);
        this.state.users = localStorage.getItem('users');
        this.state.username = localStorage.getItem('CurrentUser');
        console.log(this.state)
    }
    alertClicked2(x) {
        console.log('deleted: ', x);
    }
}

export default Task;