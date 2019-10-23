import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import s from "./Task.module.css";


class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch('https://api.gastroli.ua/v2/events/filter?locale=uk&public_key=3638eeb29dff9f8bb81f72e805769df0&filter%5Bcity_id%5D=1&limit=12&offset=24')
            .then(res => res.json())
            .then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
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
                        {items.event_categories.map(item => (
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
    }
    alertClicked2(x) {
        console.log('deleted: ', x);
    }
}

export default Task;