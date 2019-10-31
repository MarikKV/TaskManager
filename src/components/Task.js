import React from 'react';

import Card from 'react-bootstrap/Card';
import {Button, ButtonToolbar} from "react-bootstrap";
import ModalWindowContainer from './ModalWindowContainer';
import s from "../componentsStyle/Task.module.css";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskToEdit: '',
            showModal: false,
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
        let SharedTasks = [];

        for(user in users){
            if(users[user].name == username){
                //console.log('Loged user info: ',users[user]);
                let task;
                let allTasks=[];
                for(task in users[user].tasks){
                    //console.log('Loged user task #', task, users[user].tasks[task]);
                    allTasks.push(users[user].tasks[task]);
                    localStorage.setItem('users', JSON.stringify(users))
                }
                this.setState({
                    items: allTasks
                }); 
            }
            let task;
            for(task in users[user].tasks){
                if(users[user].tasks[task].shareTo == useremail){
                    //console.log(users[user].name,' shared : task', users[user].tasks[task])
                    SharedTasks.push(users[user].tasks[task]);                     
                }  
                this.setState({
                    shareItems: SharedTasks
                });              
            }    
        }
        this.setState({isLoaded: true})
        //console.log(this.state.shareItems)
    }
    deleteTask(x) {
        console.log('deleted: ', x);
        let taskId = x.id;
        let users = JSON.parse(localStorage.getItem('users'));
        let username = localStorage.getItem('CurrentUser');
        let user;
       
        for(user in users){
            if(users[user].name == username){
                users[user].tasks.splice(taskId, 1);
                console.log(users[user].tasks);
                }
            }
        localStorage.setItem('users', JSON.stringify(users)); 
        this.setState({isLoaded: false})
        setTimeout(() => this.setState({isLoaded: true}), 200);

        //window.location.href = '/tasks';
    }
    render() {
        const {error, isLoaded, items, shareItems} = this.state;
        let hideModal = () => this.setState({showModal: false})
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Card>
                    <div>
                        <h1>My tasks</h1>
                        {items.map(item => (
                            <div className={s.task_block}  key={item.taskname}>      
                                <Card className="text-center"  key={item.taskname}>
                                    <Card.Header>Shared to: <b>{item.shareTo}</b></Card.Header>
                                    <Card.Body>
                                        <Card.Title>{item.taskname}</Card.Title>
                                        <Card.Text>
                                            {item.taskdescribe}<br />
                                        </Card.Text>
                                        <ButtonToolbar>
                                            <Button variant="primary" onClick={() => this.setState({showModal: true, taskToEdit: item})}>Edit</Button>
                                            <Button variant="danger" onClick={() => this.deleteTask(item)}>Delete</Button>
                                        </ButtonToolbar>
                                    </Card.Body>
                                    <Card.Footer className="text-muted"></Card.Footer>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <ModalWindowContainer show={this.state.showModal} onHide={hideModal} task={this.state.taskToEdit}/>

                    <br />
                    <div className={s.card_blok}>
                        <h1>Tasks shared to me</h1>
                        <hr />
                        {shareItems.map(item => (
                            <div className={s.task_block}  key={item.taskname}>      
                                <Card className="text-center">
                                    <Card.Header>Shared from: <b>{item.shareTo}</b></Card.Header>
                                    <Card.Body>
                                        <Card.Title>{item.taskname}</Card.Title>
                                        <Card.Text>
                                            {item.taskdescribe}<br />
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.setState({showModal: true, taskToEdit: item})}>Edit</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted"></Card.Footer>
                                </Card>
                            </div>
                        ))}
                     </div>
                </Card>
            );
        }
    }   
}
export default Task;