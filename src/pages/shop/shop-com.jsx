import React from "react";
import SHOP_DATA from "../../redux/ShopData/shop_data";
import Collection from "../../component/collection-preview/collection-preview-com.jsx"
import {connect} from "react-redux"

const Shop = ({shopData}) => {
        return (
            <div>
            {shopData.map(({id, ...otherProps}) => 
            <Collection 
                key={id}
                {...otherProps}
            />)}
                
            </div>
        )
    }

    const mapStateToProps = state => ({
        shopData: state.shopData.shop_Data
    })

export default connect(mapStateToProps)(Shop);