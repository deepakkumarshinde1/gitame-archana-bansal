import { call, put } from "redux-saga/effects";
import {
  getSingleUserDetailsService,
  getUserListService,
} from "./user.service";
import { saveSingleUserDetails, saveUsers } from "../user.slice";

export function* getUserListHandler(action) {
  // action {type,payload} // react-comp-before-api-call
  try {
    console.log("handler");
    let data = yield call(getUserListService, action.payload);
    console.log("received data");
    yield put(saveUsers(data));
  } catch (error) {
    alert("Server Side Error");
  }
}

export function* getSingleUserDetailsHandler(action) {
  try {
    let data = yield call(getSingleUserDetailsService, action.payload);
    yield put(saveSingleUserDetails(data));
  } catch (error) {
    alert("Server Side Error");
  }
}
