import React from "react";
import "./signup-styles.css";

import {auth, createOtherUser} from "../../firebase/firebase-utils.js"

class SignUp extends React.Component{
    constructor(){
        super();

        this.state= {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
        console.log();
        
    }

    handleClick = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Pasword dont match");
        }
        else{
        try{
        const {user} =  await auth.createUserWithEmailAndPassword(
            email,
            password
        );
            await createOtherUser(user, {displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
        catch(error){
            console.log(error);
            
        }
    }

    }


    render(){
        return(
            <div className="signUp-Parent">
            <h1>Don't have an account? Sign up here!!!</h1>
            
            <form className="sign-In-Form">
                
                <input onChange={this.handleChange} className="userName child" type="text" name="displayName" value={this.state.displayName} placeholder="Name pls..."/> 

                <input onChange={this.handleChange} className="userName child" type="email" name="email" value={this.state.email} placeholder="Email Id here..."/>

                <input onChange={this.handleChange} className="password child" type="password" name="password" value={this.state.password} placeholder="Password here..." autoComplete="none"/>

                <input onChange={this.handleChange} className="password child" type="password" name="confirmPassword" value={this.state.confirmPassword} placeholder="Re-enter the Password here..." autoComplete="none"/>

                <input onClick={this.handleClick} className="submit child" type="submit" value="Register here" />
            </form>
            </div>
        )
    }
}

export default SignUp;