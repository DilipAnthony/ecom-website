import {CartActionType} from "./cartActionType"

const INITIAL_STATE = {
    hidden: true
};

const CartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case CartActionType.CART_DROPDOWN:
            return{
                ...state,
                hidden: !state.hidden
            };

        default:
            return state;
    }
}

export default CartReducer;