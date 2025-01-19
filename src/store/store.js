import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValues: [10],
  currentValue: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      const newValue = state.counterValues + action.payload;
      state.counterValues.push(newValue);
      state.currentValue = newValue;
    },
    decrement(state, action) {
      state.counterValues = state.counterValues - action.payload;
    },
    reset(state) {
      state = initialState;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterSliceActions = counterSlice.actions;
export default store;
