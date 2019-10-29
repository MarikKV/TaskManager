import {
    ADD_TASKNAME_TEXT,
    ADD_TASKDESCRIBE_TEXT, 
    ADD_SHARE_TO_TEXT,
    ADD_TASK_SHARE,
    ADD_TASK_DEADLINE_CHANGE_DATE} from "./actions"

const defaultState = {
  taskname: '',
  taskdescribe: '',
  shareTo: '',
  share: 'false',
  deadline: '',
  logedIn: ''
};

export const addTaskReduser = (state = defaultState, action) => {
 switch (action.type) {
   case ADD_TASKNAME_TEXT: 
     return {
       ...state,
       taskname: action.payload
     }
   case ADD_TASKDESCRIBE_TEXT: 
     return {
       ...state,
       taskdescribe: action.payload
     }
    case ADD_SHARE_TO_TEXT: 
     return {
       ...state,
       shareTo: action.payload
     }
    case ADD_TASK_DEADLINE_CHANGE_DATE: 
    return {
     ...state,
     deadline: action.payload
   }
   case ADD_TASK_SHARE: 
    return {
     ...state,
     share: action.payload
   }
 }
 return state;
}

