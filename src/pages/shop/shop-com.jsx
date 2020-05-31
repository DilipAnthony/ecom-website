import React from "react";
import SHOP_DATA from "./shop_data";
import Collection from "../../component/collection-preview/collection-preview-com.jsx"

class Shop extends React.Component {
    constructor(){
        super();

        this.state = {
            SHOP_DATA
        };
    }

    render(){
        return (
            <div>
            {this.state.SHOP_DATA.map(({id, ...otherProps}) => 
            <Collection 
                key={id}
                {...otherProps}
            />)}
                
            </div>
        )
    }
}

export default Shop;