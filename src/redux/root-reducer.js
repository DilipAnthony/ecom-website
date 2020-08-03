import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import CartReducer from "../redux/cart/cart-reducer";
import directoryReducer from "../redux/Directory/directory-reducer";
import shopDataReducer from "../redux/ShopData/shopData-reducer";
import searchReducer from "../redux/search/search-reducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shopData: shopDataReducer,
  search: searchReducer,
});
