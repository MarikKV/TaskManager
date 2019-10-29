import { combineReducers } from "redux";
import { signinReduser } from "./signin/reducer";
import { signupReduser } from "./signup/reducer";
import { addTaskReduser } from "./addtask/reducer";
//import { changeTaskReduser } from "./changetask/reducer";


export default combineReducers({
  signin: signinReduser,
  signup: signupReduser,
  addtask: addTaskReduser
  //changeTask: changeTaskReduser
})

