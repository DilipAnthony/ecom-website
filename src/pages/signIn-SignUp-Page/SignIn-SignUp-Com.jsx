import React from "react";
import "./SignIn-SignUp-style.css"
import SignIn from "../../component/SIgnIn-com/SignIn-com.jsx"
import SignUp from "../../component/signup/signup-com.jsx"

const Sign = ({status}) => {
    return(
        <div className="Sign-Parent">
        <div>
            <SignIn status={status}/>
            </div>
            <div>
            <SignUp />
            </div>
        </div>
    )
}

export default Sign;