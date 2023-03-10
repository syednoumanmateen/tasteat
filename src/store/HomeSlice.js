import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1
    },
    decrement: (state, action) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;
