import { connect } from "react-redux";
import SessionForm from "./session_form";
import {login, clearSessionErrors } from "../../actions/session_actions";

const mSTP = (state, ownProps)=> {
    return ({
        errors: state.errors,
        formType: 'signup'
    })
}

const mDTP = (dispatch) => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        submitDemo: (user) => dispatch(login(user)),
        clearSessionErrors : () => dispatch(clearSessionErrors())

    })
}

export default connect(mSTP, mDTP)(SessionForm);