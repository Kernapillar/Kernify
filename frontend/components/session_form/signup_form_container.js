import { connect } from "react-redux";
import SessionForm from "./session_form";

const mSTP = (state, ownProps)=> {
    return ({
        errors: state.errors,
        formType: 'signup'
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(signup(user))
    })
}

export default connect(mSTP, mDTP)(SessionForm);