import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Home from "./home"


const App = () => (
    <>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            
            <ProtectedRoute exact path="/" component={Home}></ProtectedRoute>

        </Switch>
    
    </>
)

export default App;