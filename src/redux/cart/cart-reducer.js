import { CartActionType } from "./cartActionType";
import { addItemQuantity, minusItemQuantity } from "../cart/cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionType.CART_ITEMS_ADD:
      return {
        ...state,
        cartItems: addItemQuantity(state.cartItems, action.payload),
      };

    case CartActionType.CART_CLEAR:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case CartActionType.CART_EMPTY:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default CartReducer;
