import {CartActionType} from "./cartActionType"

export const CartDropdownHide = () => ({
    type: CartActionType.CART_DROPDOWN
})

export const CartItemsAdd = (item) => ({
    type: CartActionType.CART_ITEMS_ADD,
    payload: item
})