import {
     SIGNUP_CHANGE_EMAIL_TEXT,
     SIGNUP_CHANGE_PASSWORD_TEXT, 
     SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT, 
     SIGNUP_CHANGE_NICKNAME_TEXT, 
     SIGNUP_CHANGE_DISABLED} from "./actions"

const defaultState = {
  email: '',
  password: '',
  repeatPassword: '',
  nickname: '',
  disabled: 'disabled'
};

export const signupReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SIGNUP_CHANGE_EMAIL_TEXT: 
      return {
        ...state,
        email: action.payload
      }
    case SIGNUP_CHANGE_PASSWORD_TEXT: 
      return {
        ...state,
        password: action.payload
      }
    case SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT: 
      return {
        ...state,
        repeatPassword: action.payload
      }
    case SIGNUP_CHANGE_NICKNAME_TEXT: 
    return {
      ...state,
      nickname: action.payload
    }
    case SIGNUP_CHANGE_DISABLED: 
    return {
      ...state,
      disabled: action.payload
    }
  } 
  return state;
}
