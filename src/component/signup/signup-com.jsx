import React from "react";
import "./signup-styles.css";
import Recaptcha from "react-recaptcha";

import { auth, createOtherUser } from "../../firebase/firebase-utils.js";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      isVerified: false,
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log("Testing 1");
  };

  recaptchaCallback = () => {
    console.log("Recaptcha loaded successfully");
  };

  recaptchaVerifyCallback = () => {
    this.state.isVerified = true;
  };

  handleClick = async (event) => {
    const {
      isVerified,
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;
    console.log("Testing2");
    if (isVerified === true) {
      console.log("Testing3");
      event.preventDefault();

      if (password !== confirmPassword) {
        alert("Pasword dont match");
      } else {
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
          await createOtherUser(user, { displayName });
          console.log("testing square" + JSON.stringify(user));

          this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } catch (error) {
          console.log(error);
        }
      }
    } else alert("Please confirm you are a Human!!");
  };

  render() {
    return (
      <div className="signUp-Parent">
        <h1>Don't have an account? Sign up here!!!</h1>

        <form className="sign-In-Form">
          <input
            onChange={this.handleChange}
            className="userName child"
            type="text"
            name="displayName"
            value={this.state.displayName}
            placeholder="Name pls..."
          />

          <input
            onChange={this.handleChange}
            className="userName child"
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email Id here..."
          />

          <input
            onChange={this.handleChange}
            className="password child"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password here..."
            autoComplete="none"
          />

          <input
            onChange={this.handleChange}
            className="password child"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            placeholder="Re-enter the Password here..."
            autoComplete="none"
          />
          <Recaptcha
            sitekey="6Ldne7AZAAAAADK_nN-lwy1j0zZeH2BS65ngD1Cz"
            render="explicit"
            onloadCallback={this.recaptchaCallback}
            verifyCallback={this.recaptchaVerifyCallback}
            theme="dark"
          />

          <input
            onClick={this.handleClick}
            className="submit child"
            type="submit"
            value="Register here"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
