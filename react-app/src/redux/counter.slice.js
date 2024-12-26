import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      // action {type, payload}
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    reset(state, action) {
      state.count = 0;
    },
    setCount(state, action) {
      let { payload } = action;
      state.count = payload;
    },
  },
});

export default CounterSlice;
export const { increment, decrement, reset, setCount } = CounterSlice.actions;
