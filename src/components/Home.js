import React, {Component} from "react";
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "../componentsStyle/Home.module.css";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            loaded: '',
            username: '',
            numerOfUserTasks: 0,
            numerOfsharedTasks: 0
        }
        
    }
    componentDidMount() {
        let users = JSON.parse(localStorage.getItem('users'));
        let useremail = localStorage.getItem('CurrentUserEmail'); 
        this.state.username = localStorage.getItem('CurrentUser');
        let user;
        let task;
      
        for(user in users){
            if(users[user].name ==this.state.username){
               this.state.numerOfUserTasks = users[user].tasks.length;
            }
            for(task in users[user].tasks){
                if(users[user].tasks[task].shareTo == useremail){
                    this.state.numerOfsharedTasks++;
                    console.log(this.state.numerOfsharedTasks)
                }               
            } 
        }
        
        this.setState({loaded: true})
    }
    render() {
        return (
            <div>
                <h1>Hello <b>{this.state.username}</b>! </h1>
                <h4>Check your tasks or create the new one by using header menu</h4>

                <div className={s.tasks_info_block} align='center'>
                    <h2 className={s.tasks_info_left}>For now you have:</h2>
                    <div className={s.tasks_info_right}>
                        <h3>Your tasks: <Badge variant="success">{this.state.numerOfUserTasks}</Badge></h3>
                        <h3>Shared to you tasks: <Badge variant="warning">{this.state.numerOfsharedTasks}</Badge></h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;