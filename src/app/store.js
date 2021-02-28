import { configureStore } from "@redux/toolkit";
import counterReducer from "../features/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
