import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assests/crown.svg";
import "./header-style.css"
import {auth} from "../../firebase/firebase-utils.js"
import {connect} from "react-redux";


const Header = ({isSignedIn}) => {

    console.log("status is" + isSignedIn);
    
    return(
        <div className="header">
            {isSignedIn ?
                <h1 className="customerName">Hi {isSignedIn.displayName}, Welcome to Shoppers Area</h1>
                :
                null}
            <Link to="/" className="logo">
                <Logo />
                <h1 className="logo-title">Shoppers Area</h1>
            </Link>
            <div className="header-sub">
                {
                    isSignedIn ?
                 <Link className="header-link" onClick={()=>auth.signOut()}><h1>Sign Out</h1></Link>
                :
                <Link to="/signin" className="header-link">
                    <h1>Sign in</h1>
                </Link>
                }
                <Link to="/shop" className="header-link">
                    <h1>Shop</h1>
                </Link>
                <Link to="/shop" className="header-link">
                    <h1>Contact</h1>
                </Link>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    isSignedIn: state.user.isSignedIn
    
});

export default connect(mapStateToProps)(Header);