import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.swapForm = this.swapForm.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    };
    
    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {username: "Demo_User", password: "123456"}
        this.props.submitDemo(demoUser)
    }

    swapForm = () => {
        if (this.props.formType === 'signup') {
            return(
                <div>
                    <span className="swap-form-text">Have an account? 
                        <Link to="/login">
                            <button className="swap-form">
                            Log in
                            </button>
                        </Link>
                        </span>
                </div>
            )
        } else {
            return (
                <div>
                    <span className="swap-form-text">Don't have an account? 
                    <Link to="/signup"> 
                        <button className="swap-form">
                        Sign up for Kernify
                        </button> 
                    </Link></span>
                </div>
            )
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    renderErrors() {
        return(
          <ul className="session-errors-list">
            {this.props.errors.session.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
                <br />
              </li>
            ))}
          </ul>
        );
      }

    signUpContent() {
        return (
            <div className="session-container">
                <h1 className="signup-header">Sign up for free to start listening.</h1>
                <br />
                {this.renderErrors()}
                <button className="demo-login-button" onClick={this.demoLogin}>Demo User</button>
                <div className="or-div"> <hr /> <span id="or-span"> OR </span> <hr /> </div>
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                    <label className="session-label"> What is your email address?
                            <br />
                            <input type="text"   placeholder="Enter your email address."
                            className={'login-input text-input'} />
                        </label>
                        <br />
                        <label className="session-label"> What should we call you?
                            <br />
                            <input type="text" value={this.state.username} placeholder="Enter a profile name."
                            onChange={this.update('username')} className={'login-input text-input'} />
                        </label>
                        <br />
                        <label className="session-label"> Create a password
                            <br />
                            <input type="password" value={this.state.password} placeholder="Create a password."
                            onChange={this.update('password')} className={'login-input text-input'} />
                        </label>
                        <br />
                        <label className="session-label"> Confirm your password
                            <br />
                            <input type="password" placeholder="Enter your password again."
                            className={'login-input text-input'} />
                        </label>
                        <br />
                        <button type="submit" className={"session-form-submit"}>Sign Up</button>
                    </form>
                    <hr />

                {this.swapForm()}
            </div>
        )
    }


    loginContent() {
        return (
            <div className="session-container">
                <h1 className="login-header">To continue, log in to Kernify</h1>
                <br />
                {this.renderErrors()}
                <button className="demo-login-button" onClick={this.demoLogin}>Demo User</button>
                <div className="or-div"> <hr /> <span id="or-span"> OR </span> <hr /> </div>
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                        <label className="session-label"> Username
                            <br />
                            <input type="text" value={this.state.username} placeholder="Enter username."
                            onChange={this.update('username')} className={'login-input text-input'} />
                        </label>
                        <br />
                        <label className="session-label">Password 
                            <br />
                            <input type="password" value={this.state.password} placeholder="Password."
                            onChange={this.update('password')} className={'login-input text-input'} />
                        </label>
                        <br />
                        <button type="submit" className={"session-form-submit"}>Log in</button>
                    </form>
                    <hr />

                {this.swapForm()}
            </div>
        )
    }

    // setup form switching ternary logic
    render(){
        return(
            (this.props.formType === "login") ? this.loginContent() : this.signUpContent()
        )
    }

}

export default SessionForm;