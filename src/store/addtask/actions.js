export const ADD_TASKNAME_TEXT = 'ADD_TASKNAME_TEXT';
export const ADD_TASKDESCRIBE_TEXT = 'ADD_TASKDESCRIBE_TEXT';
export const ADD_SHARE_TO_TEXT = 'ADD_SHARE_TO_TEXT';
export const ADD_TASK_SHARE = 'ADD_TASK_SHARE';
export const ADD_TASK_DEADLINE_CHANGE_DATE = 'ADD_TASK_DEADLINE_CHANGE_DATE';

export const setTasknameText = taskname => ({
    type: ADD_TASKNAME_TEXT,
    payload: taskname
})
export const setTaskdescribeText = taskdescribe => ({
    type: ADD_TASKDESCRIBE_TEXT,
    payload: taskdescribe
})
export const setShareToText = shareTo => ({
    type: ADD_SHARE_TO_TEXT,
    payload: shareTo
})
export const setDeadlineDate = deadline => ({
    type: ADD_TASK_DEADLINE_CHANGE_DATE,
    payload: deadline
})
export const setTaskShare = share => ({
    type: ADD_TASK_SHARE,
    payload: share
})
