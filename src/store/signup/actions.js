export const SIGNUP_CHANGE_EMAIL_TEXT = 'SIGNUP_CHANGE_EMAIL_TEXT';
export const SIGNUP_CHANGE_PASSWORD_TEXT = 'SIGNUP_CHANGE_PASSWORD_TEXT';
export const SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT = 'SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT';
export const SIGNUP_CHANGE_NICKNAME_TEXT = 'SIGNUP_CHANGE_NICKNAME_TEXT';
export const SIGNUP_CHANGE_DISABLED = 'SIGNUP_CHANGE_DISABLED';


export const setEmailText = email => ({
    type: SIGNUP_CHANGE_EMAIL_TEXT,
    payload: email
})
export const setPasswordText = password => ({
    type: SIGNUP_CHANGE_PASSWORD_TEXT,
    payload: password
})
export const setRepeatPasswordText = password => ({
    type: SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: password
})
export const setNicknameText = nickname => ({
    type: SIGNUP_CHANGE_NICKNAME_TEXT,
    payload: nickname
})
export const setDisabledText = disabled => ({
    type: SIGNUP_CHANGE_DISABLED,
    payload: disabled
})