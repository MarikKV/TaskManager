import React, {Component} from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "../componentsStyle/Task.module.css";


class AddTask extends Component {
    constructor(props) {
        super(props)
        
        this.onChangeTaskname = this.onChangeTaskname.bind(this);
        this.onChangeTaskdescribe= this.onChangeTaskdescribe.bind(this);
        this.onChangeSharename = this.onChangeSharename.bind(this);
        this.onChangeShare = this.onChangeShare.bind(this);
        this.onChangeTaskDeadline = this.onChangeTaskDeadline.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTaskname(e) {
       this.props.setTasknameText(e.target.value);
    }
    onChangeTaskdescribe(e) {
        this.props.setTaskdescribeText(e.target.value);
    }
     onChangeTaskDeadline(e) {
        this.props.setDeadlineDate(e.target.value);
    }
    onChangeSharename(e) {
        this.props.setShareToText(e.target.value);
     }
    onChangeShare(e){
        this.props.setTaskShare(e.target.value);
    }
    onSubmit(e) {
        e.preventDefault();
        let users =  JSON.parse(localStorage.getItem('users'));
        let username = localStorage.getItem('CurrentUser');
        console.log(username, users);
        let user;
        let newTask = {
            taskname: this.props.taskname, 
            taskdescribe: this.props.taskdescribe,
            shareTo: this.props.shareTo,
            deadline: this.props.deadline
        }
        for(user in users){ 
            console.log(users[user].name);
            if(users[user].name == username){
                users[user].tasks.push(newTask)
                console.log('task added to tasks')
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
        console.log('task added');
    }
    render() {
        let shareblock;
        if(this.props.share === 'true'){
            shareblock = <Form.Group controlId="formBasicEmail">
            <Form.Label className={s.new_task_label}>Share to add nickname yo want to share</Form.Label>
            <Form.Control 
                name="shareTo" 
                type="text" 
                placeholder="Enter nickname to share" 
                onChange={this.onChangeSharename} />
         </Form.Group>
        }
        else{
            shareblock = <div></div>
        }
            return (
                <div>
                    <Form onSubmit={this.onSubmit} className={s.new_task_block}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={s.new_task_label}>Task name</Form.Label>
                        <Form.Control 
                            name="taskname" 
                            type="text" 
                            placeholder="Enter short name of task" 
                            value={this.props.taskname}
                            onChange={this.onChangeTaskname} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={s.new_task_label}>Task describe</Form.Label>
                        <Form.Control 
                            className={s.describe_field} 
                            name="taskdescribe" 
                            type="text" 
                            placeholder="Describe a task" 
                            value={this.props.taskdescribe}
                            onChange={this.onChangeTaskdescribe} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control 
                            name="date" 
                            type="date" 
                            placeholder="Chuse a date" 
                            value={this.props.deadline}
                            onChange={this.onChangeTaskDeadline} />
                    </Form.Group>
                    
                    <fieldset>
                    <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="task for me only"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        value='false'
                        name="share"
                        onChange={this.onChangeShare}
                        />
                        <Form.Check
                        type="radio"
                        label="share task"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        value='true'
                        name="share"
                        onChange={this.onChangeShare}
                        />
                    </Col>
                    </Form.Group>
                    </fieldset>
                    {shareblock}
                    <Button variant="primary" type="submit" disabled={this.props.disabled}>
                        Submit
                    </Button>
                </Form>  
                </div>
            );
    }

}

export default AddTask;
