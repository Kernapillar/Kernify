import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: ""
        };
        console.log(this.props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.swapForm = this.swapForm.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
        this.renderErrors = this.renderErrors.bind(this)

    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {username: "Demo", password: "123456"}
        this.props.processForm(demoUser)
    }

    swapForm = () => {
        if (this.props.formType === 'signup') {
            return(
                <div>
                    <span>Have an account? <Link to="/login">Log in</Link>.</span>
                </div>
            )
        } else {
            return (
                <div>
                    <span>Don't have an account? <Link to="/signup">Sign in</Link>.</span>
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
              </li>
            ))}
          </ul>
        );
      }

    signUpContent() {
        return (
            <div className="session-container">
                <h1 className="signup-header">Sign up for free to start listening.</h1>
                {this.renderErrors()}
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                        <label> What should we call you?
                            <br />
                            <input type="text" value={this.state.username} placeholder="Enter a profile name."
                            onChange={this.update('username')} className={'login-input'} />
                        </label>
                        <br />
                        <label> Create a password
                            <br />
                            <input type="password" value={this.state.password} placeholder="Create a password."
                            onChange={this.update('password')} className={'login-input'} />
                        </label>
                        <br />
                        <button type="submit" className={"signup-submit"}>Sign Up</button>
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
                {this.renderErrors()}
                <button className="demo-login-button" onClick={this.demoLogin}>Demo User</button>
                <hr />
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                        <label> Username
                            <br />
                            <input type="text" value={this.state.username} placeholder="Enter username."
                            onChange={this.update('username')} className={'login-input'} />
                        </label>
                        <br />
                        <label>Password 
                            <br />
                            <input type="password" value={this.state.password} placeholder="Password."
                            onChange={this.update('password')} className={'login-input'} />
                        </label>
                        <br />
                        <button type="submit" className={"login-submit"}>Log in</button>
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