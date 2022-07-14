import { connect } from "react-redux";
import SessionForm from "./session_form";
import { clearSessionErrors } from "../../actions/session_actions";

const mSTP = (state, ownProps)=> {
    return ({
        errors: state.errors,
        formType: 'login'
    })
}

const mDTP = (dispatch) => {
    return ({
        processForm: (user) => dispatch(login(user)),
        submitDemo: (user) => dispatch(login(user)),
        clearSessionErrors : () => dispatch(clearSessionErrors())

    })
}

export default connect(mSTP, mDTP)(SessionForm);