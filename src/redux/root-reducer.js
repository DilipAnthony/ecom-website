import {combineReducers} from "redux";
import userReducer from "./user/user-reducer";
import CartReducer from "../redux/cart/cart-reducer"

export default combineReducers({
    user: userReducer,
    cart: CartReducer
});