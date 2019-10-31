export const ADD_TASKNAME_TEXT = 'ADD_TASKNAME_TEXT';
export const ADD_TASKDESCRIBE_TEXT = 'ADD_TASKDESCRIBE_TEXT';

export const setTasknameText = taskname => ({
    type: ADD_TASKNAME_TEXT,
    payload: taskname
})
export const setTaskdescribeText = taskdescribe => ({
    type: ADD_TASKDESCRIBE_TEXT,
    payload: taskdescribe
})
