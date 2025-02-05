import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TLeaderboard, TLeaderboardState } from "@/types";
import { getLeaderboard } from "@/api/leaderboard.api";

const initialState: TLeaderboardState = {
  status: "idle",
  error: null,
  leaderboard: [],
};

export const fetchLeaderboard = createAsyncThunk<TLeaderboard[], { period: "24h" | "7d" | "30d" | "all", sortBy: "xp" | "points" }>(
  "leaderboard/fetchLeaderboard",
  async ({ period, sortBy }, { rejectWithValue }) => {
    try {
      const response = await getLeaderboard(period, sortBy);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setLeaderboard: (state, action) => {
      state.leaderboard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
      state.leaderboard = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchLeaderboard.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchLeaderboard.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch leaderboard";
    });
  },
});

export const { setLeaderboard } = leaderboardSlice.actions;
