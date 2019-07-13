const initialState = {
  shoes: [],
  isLoading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
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
      return state;
  }
};

export default reducer;
