export const addItemQuantity = (cartItems, itemToAdd) => {
  const isAvailable = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (isAvailable) {
    console.log("enteredboom");

    return cartItems.map((cartItem) => {
      if (cartItem.id === itemToAdd.id)
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      else return cartItem;
    });
  } else {
    console.log("poda");

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};
