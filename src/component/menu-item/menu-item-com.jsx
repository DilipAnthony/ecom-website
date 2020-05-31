import React from "react";
import "./menu-item-style.css"
import {withRouter} from "react-router-dom"

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
        
    <div onClick = {() => history.push(`${match.url}${linkUrl}`)}
    
    className="container">
    <div className={`image ${size}`} style={{
        backgroundImage:`url(${imageUrl})`
    }}>
    <div className="content">
    <h1>{title.toUpperCase()}</h1>
    <p>Shop now</p>
    </div>
    </div>
</div>
)


export default withRouter(MenuItem);