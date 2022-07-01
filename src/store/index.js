import { configureStore } from "@reduxjs/toolkit";
import ReduxMainStore from "./app";

export default configureStore({
  reducer: ReduxMainStore
})
