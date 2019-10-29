import {SIGNIN_CHANGE_EMAIL_TEXT, SIGNIN_CHANGE_PASSWORD_TEXT} from "./actions";

const defaultState = {
  email: '',
  password: ''
};

export const signinReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SIGNIN_CHANGE_EMAIL_TEXT: 
      return {
        ...state,
        email: action.payload
      }
    case SIGNIN_CHANGE_PASSWORD_TEXT: 
      return {
        ...state,
        password: action.payload
      }
  }
  return state;
}

