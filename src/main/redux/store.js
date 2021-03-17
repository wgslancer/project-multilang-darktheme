import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import rootReducers from "./root-reducers";

const store = configureStore({
  reducer: rootReducers,
  middleware: [logger],
});

export default store;
