import { connect } from "react-redux";
import SessionForm from "./session_form";

const mSTP = (state, ownProps)=> {
    return ({
        errors: state.errors,
        formType: 'login'
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(login(user)),
        submitDemo: (user) => dispatch(login(user))

    })
}

export default connect(mSTP, mDTP)(SessionForm);