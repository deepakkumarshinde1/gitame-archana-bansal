import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    users: [],
    userDetails: null,
  },
  reducers: {
    saveUsers(state, action) {
      console.log("reducer");
      let { payload } = action;
      state.users = payload;
    },
    saveSingleUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    getUserList() {},
    getSingleUserDetails(state) {
      state.userDetails = null;
    },
  },
});

export default UserSlice;
export const {
  saveUsers,
  getUserList,
  getSingleUserDetails,
  saveSingleUserDetails,
} = UserSlice.actions;
