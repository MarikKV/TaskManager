import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import allRedusers from './store/reducer';
import Header from './components/Header';
import Task from './components/Task';
import Home from './components/Home'
import AddTaskContainer from './components/AddTaskContainer';
import SignInContainer from './components/SignInContainer';
import SignUpContainer from './components/SignUpContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
    allRedusers,
    {},
    );

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App" align='center'>
                        <Route path='/' component={Header}/>

                        <Route exact path='/' component={SignInContainer}/>

                        <Route exact path='/tasks' component={Task}/>

                        <Route exact path='/home' component={Home}/>

                        <Route exact path='/newTask' component={AddTaskContainer}/>

                        <Route path='/SignUp' component={SignUpContainer}/>

                        <Route path='/SignIn' component={SignInContainer}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
