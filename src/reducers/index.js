import updateShoppingCart from './shoppingCart';
import updateShoesList from './shoesList';

const reducer = (state, action) => ({
  shoesList: updateShoesList(state, action),
  shoppingCart: updateShoppingCart(state, action),
});

export default reducer;
