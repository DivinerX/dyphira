import { configureStore } from "@reduxjs/toolkit";
import { leaderboardSlice } from "./slices/leaderboardSlice";
import assessmentReducer from "./slices/assessment";
import rewardsReducer from './slices/rewards'
import sectionsReducer from './slices/sections'
import chatReducer from './slices/chat'
import userReducer from './slices/users'

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardSlice.reducer,
    assessment: assessmentReducer,
    rewards: rewardsReducer,
    sections: sectionsReducer,
    chat: chatReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

