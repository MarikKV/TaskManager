import React, {Component} from 'react';

import {BrowserRouter, Route} from "react-router-dom";

import Header from './Header/Header';
import Register from './Header/Register';
import Login from './Header/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import Task from './Task/Task';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter clasName>
                <div className="App" align='center'>
                    <Header/>
                    <Route path='/home' component={Task}/>

                    <Route exact path='/tasks' component={Task}/>

                    <Route path='/SignUp' component={Register}/>

                    <Route path='/SignIn' component={Login}/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
