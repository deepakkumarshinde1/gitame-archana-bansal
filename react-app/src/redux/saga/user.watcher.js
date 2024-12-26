import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  getSingleUserDetailsHandler,
  getUserListHandler,
} from "./user.handler";
import { getSingleUserDetails, getUserList } from "../user.slice";

export function* getUserListWatcher() {
  console.log("watcher");
  yield takeLatest(getUserList.type, getUserListHandler);
}

export function* getSingleUserDetailsWatcher() {
  yield takeLatest(getSingleUserDetails.type, getSingleUserDetailsHandler);
}
