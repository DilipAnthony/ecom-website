import React from "react";
import Collection from "../../component/collection-preview/collection-preview-com.jsx"
import {connect} from "react-redux"

const CollectionPreview = ({shopData, match}) => {
    console.log("entered");
    console.log(match);
    
    
    return(
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


export default connect(mapStateToProps)(CollectionPreview);