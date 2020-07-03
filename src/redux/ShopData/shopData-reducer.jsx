import ShopData from "./shop_data"

const INITIAL_STATE = {
    shop_Data: ShopData
}

const shopDataReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default shopDataReducer;