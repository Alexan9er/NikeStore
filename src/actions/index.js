const shoesRequested = () => ({
  type: 'FETCH_SHOES_REQUEST',
});

const shoesLoaded = newShoes => ({
  type: 'FETCH_SHOES_SUCCESS',
  payload: newShoes,
});

const shoesError = error => ({
  type: 'FETCH_SHOES_FAILURE',
  payload: error,
});

export const shoeAddedToCart = shoeId => ({
  type: 'SHOE_ADDED_TO_CART',
  payload: shoeId,
});

export const shoeRemoveFromCart = shoeId => ({
  type: 'SHOE_REMOVE_FROM_CART',
  payload: shoeId,
});

export const allShoesRemoveFromCart = shoeId => ({
  type: 'ALL_SHOES_REMOVE_FROM_CART',
  payload: shoeId,
});

const fetchShoes = (shoesService, dispatch) => () => {
  dispatch(shoesRequested());
  shoesService
    .getShoes()
    .then(data => dispatch(shoesLoaded(data)))
    .catch(err => dispatch(shoesError(err)));
};

export { fetchShoes };
