import {
    ADD_TASKNAME_TEXT,
    ADD_TASKDESCRIBE_TEXT
   } from "./actions"

const defaultState = {
  taskname: '',
  taskdescribe: ''
};

export const editTaskReduser = (state = defaultState, action) => {
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
 }
 return state;
}

