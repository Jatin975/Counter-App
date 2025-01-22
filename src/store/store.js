import { configureStore, createSlice } from "@reduxjs/toolkit";

const WINDOW_SIZE = 10;
const initialState = {
  counterValues: [10],
  currentIdx: 0,
  // counterHistoryIdx: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      let newValue = state.counterValues[state.currentIdx] + action.payload;
      state.currentIdx++;
      let updatedCounterValues = [];
      if (state.counterValues.length === WINDOW_SIZE) {
        updatedCounterValues = state.counterValues.slice(1, state.currentIdx);
      } else {
        updatedCounterValues = state.counterValues.slice(0, state.currentIdx);
      }

      if (state.currentIdx >= WINDOW_SIZE) {
        state.currentIdx = WINDOW_SIZE - 1;
      }
      updatedCounterValues.push(newValue);
      state.counterValues = updatedCounterValues;
    },
    decrement(state, action) {
      let newValue = state.counterValues[state.currentIdx] - action.payload;
      state.currentIdx++;
      let updatedCounterValues = [];
      if (state.counterValues.length === WINDOW_SIZE) {
        updatedCounterValues = state.counterValues.slice(1, state.currentIdx);
      } else {
        updatedCounterValues = state.counterValues.slice(0, state.currentIdx);
      }

      if (state.currentIdx >= WINDOW_SIZE) {
        state.currentIdx = WINDOW_SIZE - 1;
      }
      updatedCounterValues.push(newValue);
      state.counterValues = updatedCounterValues;
    },
    reset(state) {
      state.counterValues = initialState.counterValues;
      state.currentIdx = initialState.currentIdx;
    },
    undo(state) {
      state.currentIdx--;
    },
    redo(state) {
      state.currentIdx++;
    },
    setCurrentIdx(state, action) {
      state.currentIdx = action.payload;
    },
    clearHistory(state) {
      state.counterValues = [state.counterValues[state.currentIdx]];
      state.currentIdx = 0;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterSliceActions = counterSlice.actions;
export default store;
