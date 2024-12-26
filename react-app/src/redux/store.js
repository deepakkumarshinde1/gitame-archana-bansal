import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import CounterSlice from "./counter.slice";
import UserSlice from "./user.slice";
import { rootSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    myUser: UserSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
