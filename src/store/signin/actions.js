export const SIGNIN_CHANGE_EMAIL_TEXT = 'SIGNIN_CHANGE_EMAIL_TEXT';
export const SIGNIN_CHANGE_PASSWORD_TEXT = 'SIGNIN_CHANGE_PASSWORD_TEXT';


export const setEmailText = email => ({
    type: SIGNIN_CHANGE_EMAIL_TEXT,
    payload: email
})
export const setPasswordText = password => ({
    type: SIGNIN_CHANGE_PASSWORD_TEXT,
    payload: password
})