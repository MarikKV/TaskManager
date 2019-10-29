import React, {Component} from "react";
import { connect } from 'react-redux';
import {setTasknameText, setTaskdescribeText, setShareToText, setDeadlineDate, setTaskShare} from '../store/addtask/actions';
import AddTask from './AddTask';


class AddTaskContainer extends Component {
    render() { 
        return <AddTask
            nickname={this.props.nickname} 
            email={this.props.email} 
            taskname={this.props.taskname} 
            taskdescribe={this.props.taskdescribe} 
            disabled={this.props.disabled} 
            diadline={this.props.diadline} 
            postdate={this.props.postdate} 
            share={this.props.share}
            shareTo={this.props.shareTo} 
            setShareToText={this.props.setShareToText}
            setTaskShare={this.props.setTaskShare}
            setDeadlineDate={this.props.setDeadlineDate} 
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
        shareTo: state.addtask.shareTo,
        deadline: state.addtask.deadline
    };
}

const mapDispatchToProps = {
    setTasknameText,
    setTaskdescribeText,
    setShareToText,
    setDeadlineDate,
    setTaskShare

}
export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);
