const initialState = {
  shoes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOES_LOADED':
      return {
        shoes: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
