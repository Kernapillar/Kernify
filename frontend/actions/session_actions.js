import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

window.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER
window.LOGOUT_CURRENT_USER = LOGOUT_CURRENT_USER
window.RECEIVE_ERRORS = RECEIVE_ERRORS



export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS, 
    errors
})

export const login = (user) => dispatch => {
    return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), error => (dispatch(receiveErrors(error.responseJSON))))
}

export const logout = () => dispatch=> {
    return APIUtil.logout().then(user => dispatch(logoutCurrentUser()))
}

export const signup = (user) => dispatch => {
    return APIUtil.signup(user)
    .then(user =>  console.log(user), dispatch(receiveCurrentUser(user)), error => dispatch(receiveErrors(error.responseJSON)))
}

window.login = login
window.logout = logout
window.signup = signup