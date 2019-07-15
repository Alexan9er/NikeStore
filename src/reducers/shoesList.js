const updateShoesList = (state, action) => {
  if (state === undefined) {
    return {
      shoes: [],
      isLoading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_SHOES_REQUEST':
      return {
        shoes: [],
        isLoading: true,
        error: null,
      };
    case 'FETCH_SHOES_SUCCESS':
      return {
        shoes: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_SHOES_FAILURE':
      return {
        shoes: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state.shoesList;
  }
};

export default updateShoesList;
