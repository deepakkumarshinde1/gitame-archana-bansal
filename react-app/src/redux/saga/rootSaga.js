import { all } from "redux-saga/effects";
import {
  getSingleUserDetailsWatcher,
  getUserListWatcher,
} from "./user.watcher";

export function* rootSaga() {
  console.log("root");
  let effects = [getUserListWatcher(), getSingleUserDetailsWatcher()];
  yield all(effects);
}
