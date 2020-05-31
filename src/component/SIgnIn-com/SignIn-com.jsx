import React from "react";
import "./SignIn-style.css"
import {signInWithGoogle} from "../../firebase/firebase-utils.js"
import {SignInWithFacebook} from "../../firebase/firebase-utils.js"
import {auth, createOtherUser} from "../../firebase/firebase-utils.js"


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    handleClick = async event => {
        event.preventDefault();
        const {email, password} = this.state
        try{
        await auth.signInWithEmailAndPassword(email, password);

        this.setState({
            email: "",
            password: ""
        })
    }catch(error){
        console.log(error);
        
    }
    }

    render(){
        return(
        <div className="signIn-Container">
                <div className="signIn-Head">
                    <h1>Already have an Account?</h1>
                    <h2>Sign in below</h2>
                </div>
                <form className="sign-In-Form">
                
                    <input onChange={this.handleChange} className="userName child" type="email" name="email" value={this.state.email} placeholder="Email Id here..."/> 
               
                    <input onChange={this.handleChange} className="password child" type="password" name="password" value={this.state.password} placeholder="Password here..." autoComplete="none"/>
               
                    <input onClick={this.handleClick} className="submit child" type="submit" value="Sign in" />
                </form>
                <div className="other-sign">
                    <h2>Or use below gateway to sign in</h2>
                    <input onClick={signInWithGoogle} className="submit child" type="submit" value="Google SignIn" />
                    <input onClick={SignInWithFacebook} className="submit child" value="Facebook SignIn" />
                </div>
        </div>
           
        )
    }
}

export default SignIn;