import React, {Component} from "react";
import { connect } from 'react-redux';
import {setTasknameText, setTaskdescribeText} from '../store/edittask/actions';
import ModalWindow from './ModalWindow';

class ModalWindowContainer extends Component {
    render() { 

        return <ModalWindow
            show={this.props.show} 
            onHide={this.props.onHide}
            refreshTasks={this.props.refreshTasks}
            task={this.props.task}
            taskname={this.props.taskname} 
            taskdescribe={this.props.taskdescribe} 
            setTasknameText={this.props.setTasknameText} 
            setTaskdescribeText={this.props.setTaskdescribeText} />;
    }
}

const mapStateToProps = (state) => {
    return {
        taskname: state.edittask.taskname,
        taskdescribe: state.edittask.taskdescribe,
    };
}

const mapDispatchToProps = {
    setTasknameText,
    setTaskdescribeText
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowContainer);