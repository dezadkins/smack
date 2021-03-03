import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

//The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;

//  reducers: {
//     increment: (state) => {
// Redux Toolkit allows us to write "mutaating" logic in reducers.
// It doesn't actually mutate the state because it uses the Immer Library,
// which detects changes to a "draft state" and prduces a brand new
// immutable state based off those changes
// state.value += 1;
//     },
//   },
// });
