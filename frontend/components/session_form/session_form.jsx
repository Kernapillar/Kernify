import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "", 
            email: "", 
            errors: []
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
        this.setState({errors: []})

        e.preventDefault();
        if (this.state.email.length === 0 && this.props.formType === 'signup') {
            this.setState({errors: "Email cannot be empty"})
        } else {
            const user = Object.assign({}, this.state);
            this.props.processForm(user);
        }
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
            {this.props.errors.session.concat(this.state.errors).map((error, i) => (
              <li className="session-error-item" key={`error-${i}`}>
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
                <p className="signup-header"><strong>Sign up for free to start listening.</strong></p>
                {this.renderErrors()}
                <button className="demo-login-button" onClick={this.demoLogin}>Demo User</button>
                <div className="or-div"> <hr /> <span id="or-span"> OR </span> <hr /> </div>
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                    <label className="session-label"> What is your email address?
                            <br />
                            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Enter your email address."
                            className={'login-input'} />
                        </label>
                        <br />
                        <label className="session-label"> What should we call you?
                            <br />
                            <input type="text" value={this.state.username} placeholder="Enter a profile name."
                            onChange={this.update('username')} className={'login-input'} />
                        </label>
                        <br />
                        <label className="session-label"> Create a password
                            <br />
                            <input type="password" value={this.state.password} placeholder="Create a password."
                            onChange={this.update('password')} className={'login-input'} />
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
                <p className="login-header"><strong>To continue, log in to Kernify</strong></p>
                {this.renderErrors()}
                <button className="demo-login-button" onClick={this.demoLogin}>Demo User</button>
                <div className="or-div"> <hr /> <span id="or-span"> OR </span> <hr /> </div>
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                        <label className="session-label"> Username
                            <br />
                            <input type="text" value={this.state.username} placeholder="Enter username."
                            onChange={this.update('username')} className={'login-input'} />
                        </label>
                        <br />
                        <label className="session-label">Password 
                            <br />
                            <input type="password" value={this.state.password} placeholder="Password."
                            onChange={this.update('password')} className={'login-input'} />
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
            <>
                <img className="login-signup-logo" src="https://kernify-seed.s3.us-west-1.amazonaws.com/kernify_logo.png" alt="Kernify Logo" />
                {(this.props.formType === "login") ? this.loginContent() : this.signUpContent()}
            </>
        )
    }

}

export default SessionForm;