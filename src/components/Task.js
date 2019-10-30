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
            items: [],
            shareItems: [],
        }
    }

    componentDidMount() {
        let users = JSON.parse(localStorage.getItem('users'));
        let username = localStorage.getItem('CurrentUser');
        let useremail = localStorage.getItem('CurrentUserEmail');
        let user;
        for(user in users){
            if(users[user].name == username){
                //console.log('Loged user info: ',users[user]);
                let task;
                let allTasks=[];
                for(task in users[user].tasks){
                    console.log('Loged user task #', task, users[user].tasks[task]);
                    allTasks.push(users[user].tasks[task]);
                    localStorage.setItem('users', JSON.stringify(users))
                }
                this.setState({
                    items: allTasks
                }); 
            }
            let task;
            let SharedTasks = [];
            for(task in users[user].tasks){
                if(users[user].tasks[task].shareTo == useremail){
                    console.log(users[user], users[user].tasks[task])
                    SharedTasks.push(users[user].tasks[task]);
                    this.setState({
                        shareItems: SharedTasks
                    }); 
                }
                
                console.log(SharedTasks)
            }
            
        }
        this.setState({isLoaded: true})
    }
    editTask(x) {
        console.log('edit ', x);
        
    }
    deleteTask(x) {
        console.log('deleted: ', x);
        let users = JSON.parse(localStorage.getItem('users'));
        let username = localStorage.getItem('CurrentUser');
        let user;
       
        for(user in users){
            if(users[user].name == username){
                let task;
                let allTasks=[];
                for(task in users[user].tasks){
                    if(JSON.stringify(users[user].tasks[task]) == JSON.stringify(x)){
                        users[user].tasks.splice(Number(user), 1);
                        allTasks.push(users[user].tasks);
                    }
                }
                this.setState({isLoaded: false}); 
            }
        }
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = '/tasks';

    }
    render() {
        const {error, isLoaded, items, shareItems} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>My tasks</h1>
                    {items.map(item => (
                        <div className={s.task_block}  key={item.taskname}>      
                            <Card className="text-center">
                                <Card.Header>Shared to: <b>{item.shareTo}</b></Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.taskname}</Card.Title>
                                    <Card.Text>
                                        {item.taskdescribe}<br />
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.editTask(item)}>Edit</Button>
                                    <Button variant="danger" onClick={() => this.deleteTask(item)}>Delete</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">Deadline: {item.deadline}</Card.Footer>
                            </Card>
                        </div>
                    ))}
                    <h1>Tasks shared to me</h1>
                    {console.log(shareItems)}
                    {shareItems.map(item => (
                        <div className={s.task_block}  key={item.taskname}>      
                            <Card className="text-center">
                                <Card.Header>Shared from: <b>{item.shareTo}</b></Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.taskname}</Card.Title>
                                    <Card.Text>
                                        {item.taskdescribe}<br />
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.editTask(item)}>Edit</Button>
                                    <Button variant="danger" onClick={() => this.deleteTask(item)}>Delete</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">Deadline: {item.deadline}</Card.Footer>
                            </Card>
                        </div>
                    ))}
                </div>
            );
        }
    }   
}
export default Task;