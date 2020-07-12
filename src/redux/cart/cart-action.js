import { CartActionType } from "./cartActionType";

export const CartDropdownHide = () => ({
  type: CartActionType.CART_DROPDOWN,
});

export const CartItemsAdd = (item) => ({
  type: CartActionType.CART_ITEMS_ADD,
  payload: item,
});

export const CartClearItems = (item) => ({
  type: CartActionType.CART_CLEAR,
  payload: item,
});

export const CartEmpty = () => ({
  type: CartActionType.CART_EMPTY,
});
