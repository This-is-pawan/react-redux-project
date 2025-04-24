import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  price: 0,
  login: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.price += action.payload.price;
    },
    toggleLogin: (state) => {
      state.login = !state.login;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        state.price = Math.max(item.price-1);
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }
    },
  },
});

export const { addToCart, removeFromCart, toggleLogin } = cartSlice.actions;
export default cartSlice.reducer;
