import React, {Component} from "react";
import { connect } from 'react-redux';
import {setTasknameText, setTaskdescribeText, setShareToText, setTaskShare} from '../store/addtask/actions';
import AddTask from './AddTask';


class AddTaskContainer extends Component {
    render() { 
        return <AddTask
            email={this.props.email} 
            taskname={this.props.taskname} 
            taskdescribe={this.props.taskdescribe} 
            share={this.props.share}
            shareTo={this.props.shareTo} 
            setShareToText={this.props.setShareToText}
            setTaskShare={this.props.setTaskShare}
            setTasknameText={this.props.setTasknameText} 
            setTaskdescribeText={this.props.setTaskdescribeText} />;
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.signin.email,
        taskname: state.addtask.taskname,
        taskdescribe: state.addtask.taskdescribe,
        share: state.addtask.share,
        shareTo: state.addtask.shareTo
    };
}

const mapDispatchToProps = {
    setTasknameText,
    setTaskdescribeText,
    setShareToText,
    setTaskShare

}
export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);
