import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TLeaderboard, TLeaderboardState } from "@/types";
import { getLeaderboard } from "@/api/leaderboard.api";

const initialState: TLeaderboardState = {
  status: "idle",
  error: null,
  leaderboard: [],
};

export const fetchLeaderboard = createAsyncThunk<TLeaderboard[], void>(
  "leaderboard/fetchLeaderboard",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getLeaderboard();
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
