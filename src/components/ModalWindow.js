import React, {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "../componentsStyle/Task.module.css";

class ModalWindow extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0
        }

        this.onChangeTaskname = this.onChangeTaskname.bind(this);
        this.onChangeTaskdescribe= this.onChangeTaskdescribe.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeTaskname(e) {
        this.props.setTasknameText(e.target.value);
    }
    onChangeTaskdescribe(e) {
        this.props.setTaskdescribeText(e.target.value);
    }
    onSubmit(e) {
        e.preventDefault();
        //console.log(this.props.task.id, this.props)
        let taskId = this.props.task.id;
        let users =  JSON.parse(localStorage.getItem('users'));
        let username = localStorage.getItem('CurrentUser');
        let useremail = localStorage.getItem('CurrentUserEmail');
        let user;
        if(this.props.task.shareTo == ''){
            console.log('no share');
            for(user in users){ 
                console.log(users[user].name);
                if(users[user].name == username){ 
                    //console.log(users[user].tasks, 'edit task: ',users[user].tasks[taskId])
                    users[user].tasks[taskId].taskname = this.props.taskname;
                    users[user].tasks[taskId].taskdescribe= this.props.taskdescribe;
                }
            }
        } else {
             for(user in users){ 
                //console.log(users[user].name);
                if(users[user].email !== useremail){ 
                    //console.log(users[user].tasks, 'edit task: ',users[user].tasks[taskId])
                    users[user].tasks[taskId].taskname = this.props.taskname;
                    users[user].tasks[taskId].taskdescribe= this.props.taskdescribe;
                }
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
        //console.log('task edited');
    }
    render(){
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <Form onSubmit={this.onSubmit} className={s.new_task_block}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={s.new_task_label}>Task name</Form.Label>
                        <Form.Control 
                            name="taskname" 
                            type="text" 
                            defaultValue={this.props.task.taskname}
                            placeholder="Enter short name of task" 
                            onChange={this.onChangeTaskname} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={s.new_task_label}>Task desscribe</Form.Label>
                        <Form.Control 
                            className={s.describe_field} 
                            name="taskdescribe" 
                            type="text" 
                            defaultValue={this.props.task.taskdescribe}
                            placeholder="Describe a task" 
                            onChange={this.onChangeTaskdescribe} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.props.refreshTasks}>
                        Submit
                    </Button>                    
                    <Button variant="warning" onClick={this.props.onHide}>Close</Button>

                </Form>  
                </Modal.Body>
        </Modal>
        )
    }
}
export default ModalWindow;