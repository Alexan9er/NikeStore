const initialState = {
  shoes: [],
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOES_REQUESTED':
      return {
        shoes: [],
        isLoading: true,
      };
    case 'SHOES_LOADED':
      return {
        shoes: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
