export const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM _CART":
      return {
        ...state,
        cart: [...state.cart].filter((state.cart.id = action.payload.id)),
      };
    default:
      return state;
  }
}

export default reducer;
