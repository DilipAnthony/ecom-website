import React from "react";
import "./collection-preview-com.css"
import {connect} from "react-redux"
import {CartItemsAdd} from "../../redux/cart/cart-action"
import { CartActionType } from "../../redux/cart/cartActionType";

const COllection_Preview = ({items, title, routeName, CartItemsAdd}) => {
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
                        <p>: ${item.price}</p>
                        </div>
                        <div className="shop-name1" key={item.id} onClick={() => CartItemsAdd(item)}><h2>Add to cart</h2></div>
                        </div>
                        
                        ))}
                    
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    CartItemsAdd: (item) => dispatch(CartItemsAdd(item))
})

export default connect(null, mapDispatchToProps)(COllection_Preview);