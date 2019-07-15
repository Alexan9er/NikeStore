const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (shoe, item = {}, quantity) => {
  const {
    id = shoe.id,
    title = shoe.title,
    img = shoe.img,
    count = 0,
    price = 0,
  } = item;

  return {
    id,
    title,
    img,
    count: count + quantity,
    price: price + quantity * shoe.price,
  };
};

const updateOrder = (state, shoeId, quantity) => {
  const {
    shoesList: { shoes },
    shoppingCart: { cartItems },
  } = state;

  const shoe = shoes.find(({ id }) => id === shoeId);
  const itemIndex = cartItems.findIndex(({ id }) => id === shoeId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(shoe, item, quantity);

  return {
    cartTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      cartTotal: 0,
    };
  }

  switch (action.type) {
    case 'SHOE_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'SHOE_REMOVE_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_SHOES_REMOVE_FROM_CART': {
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    }
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
