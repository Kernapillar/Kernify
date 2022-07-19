import React from "react";
import GreetingContainer from "../greeting/greeting_container"
import Dropdown from "../dropdown_components/user_dropdown";

const header = () => (
    <div className="header-topbar">
        <Dropdown />
        <GreetingContainer />
    </div>
)
export default header;