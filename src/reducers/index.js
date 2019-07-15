const initialState = {
  shoes: [],
  isLoading: true,
  error: null,
  cartItems: [],
  cartTotal: 220,
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (shoe, item = {}) => {
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
    count: count + 1,
    price: price + shoe.price,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SHOES_REQUEST':
      return {
        ...state,
        shoes: [],
        isLoading: true,
        error: null,
      };
    case 'FETCH_SHOES_SUCCESS':
      return {
        ...state,
        shoes: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_SHOES_FAILURE':
      return {
        ...state,
        shoes: [],
        isLoading: false,
        error: action.payload,
      };
    case 'SHOE_ADDED_TO_CART': {
      const shoeId = action.payload;
      const shoe = state.shoes.find(shoe => shoe.id === shoeId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === shoeId);
      const item = state.cartItems[itemIndex];
      const newItem = updateCartItem(shoe, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      };
    }
    default:
      return state;
  }
};

export default reducer;
