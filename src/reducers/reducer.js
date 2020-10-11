export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => item.price + amount, 0);
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      console.log(...state.cart);
      return {
        ...state,
        cart: [...state.cart].filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default reducer;
