import { configureStore } from "@reduxjs/toolkit";
import { leaderboardSlice } from "./slices/leaderboardSlice";

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

