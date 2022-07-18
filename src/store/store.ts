import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./testSlice/reducer";

export const store = configureStore({
  reducer: {
    test: testSlice,
  },
});
