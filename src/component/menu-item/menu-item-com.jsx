import React from "react";
import "./menu-item-style.css"

const MenuItem = props => (
    <div 
    
    className="container">
    <div className={`image ${props.size}`} style={{
        backgroundImage:`url(${props.image})`
    }}>
    <div className="content">
    <h1>{props.title.toUpperCase()}</h1>
    <p1>Shop now</p1>
    </div>
    </div>
</div>
)

export default MenuItem;