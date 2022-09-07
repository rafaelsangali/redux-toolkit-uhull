import { configureStore } from "@reduxjs/toolkit";
import operation from "./slicers/counterSlice";

const store = configureStore({
  reducer: {
    operation: operation,
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store