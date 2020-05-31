import React from "react";
import "./collection-preview-com.css"

const COllection_Preview = ({items, title, routeName}) => {
    console.log(items);
    
    return(
        <div className="shop-parent">
            <div className="shop-container">
                <h1>{title}</h1>
                <div className="shop-card">
                    {items.filter((data, index) => index < 4).map(item => (
                        <div className="shop-each-card" style={{backgroundImage:`url(${item.imageUrl})`}}>
                        <div className="shop-name">
                        <p>{item.name}</p>
                        </div>
                        <div className="shop-name1"><a href="www.google.com">Add to cart</a></div>
                        </div>
                        ))}
                    
                </div>
            </div>
        </div>
    )
}

export default COllection_Preview;