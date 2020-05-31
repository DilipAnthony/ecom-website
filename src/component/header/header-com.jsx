import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assests/crown.svg";
import "./header-style.css"
import {auth} from "../../firebase/firebase-utils.js"


const Header = ({status}) => {
    return(
        <div className="header">
            {status ?
                <h1 className="customerName">Hi {status.displayName}, Welcome to Shoppers Area</h1>
                :
                null}
            <Link to="/" className="logo">
                <Logo />
                <h1 className="logo-title">Shoppers Area</h1>
            </Link>
            <div className="header-sub">
                {
                status ?
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

export default Header;