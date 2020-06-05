import {CartActionType} from "./cartActionType"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case CartActionType.CART_DROPDOWN:
            return{
                ...state,
                hidden: !state.hidden
            };

        case CartActionType.CART_ITEMS_ADD:
            return{
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

        default:
            return state;
    }
}

export default CartReducer;