const shoesLoaded = newShoes => ({
  type: 'SHOES_LOADED',
  payload: newShoes,
});

const shoesRequested = () => ({
  type: 'SHOES_REQUESTED',
});

export { shoesLoaded, shoesRequested };
