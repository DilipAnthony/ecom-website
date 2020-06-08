import {createSelector} from "reselect";

const selectCart = state => state.cart

const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    countItems => countItems.reduce((total, item) => total + item.quantity, 0)
)